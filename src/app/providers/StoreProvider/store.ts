import axios from "axios";
import { v4 as id } from "uuid";
import { create } from "zustand";

import { createNewProject, createNewTask, getProjects, getStatuses, getTasks } from "@shared/api/api";

interface Task {
	name: string;
	entityId: string;
	createdAt: number;
	completed?: boolean;
	boardId?: string
}

interface Board {
	name: string;
	entityId: number;
	createdAt: number;
	tasks: Task[]
}

interface DragResult {
	draggableId: string;
	type: string;
	reason: string;
	source: {
		index: number;
		droppableId: string;
	};
	destination: {
		droppableId: string;
		index: number;
	};
}

interface Tasks {
	tasks: Task[];
	boards: Board[];
	createTask: (name: string, boardId: number) => void;
	updateTask: (entityId: number, task: string) => void;
	removeTask: (entityId: string) => void;
	createBoard: (name: string) => void;
}

interface Project {
	name: string;
	id: string;
	createdAt: number;
	tasks: Task[];
	boards: Board[];
}

export const store = create<Tasks>((set, get) => ({
	tasks: [],
	projects: [],
	boards: [],
	loading: false,

	fetchTasks: async (boardId) => {
		const result = await getTasks(boardId);
		set({ tasks: result.tasks });
	},

	fetchStatuses: async () => {
		const result = await getStatuses();
		set({ boards: result.taskStatuses });
	},

	fetchProjects: async () => {
		const result = await getProjects();
		set({ projects: result.boards });
	},

	createProject: async (name: string) => {
		try {
			const newProject = await createNewProject(name);
			const { projects } = get();
			set({
				projects: [...projects, newProject],
			});
			console.log("Project created successfully!");
		} catch (error) {
			console.error("Error creating project:", error);
		}
	},

	createBoard: (name: string) => {
		const { boards, tasks } = get();

		console.log(tasks, "tasks");
		const newBoard = {
			entityId: id(),
			name,
			createdAt: Date.now(),
			tasks: []
		};

		set({
			boards: boards.concat([newBoard])
		});
	},

	reorderTasks: (result: DragResult) => {
		if (!result.destination) return;
		const { boards } = get();
		const startBoard = boards.find((board) => board.entityId === result.source.droppableId);
		const endBoard = boards.find((board) => board.entityId === result.destination.droppableId);

		if (startBoard.entityId === endBoard.entityId) {
			const newTaskList = Array.from(startBoard.tasks);
			const [reorderedItem] = newTaskList.splice(result.source.index, 1);
			newTaskList.splice(result.destination.index, 0, reorderedItem);

			const newBoards = boards.map((board) => (board.entityId === startBoard.entityId
				? { ...board, tasks: newTaskList }
				: board));

			set({ boards: newBoards });
		} else {
			const startTaskList = Array.from(startBoard.tasks);
			const [reorderedItem] = startTaskList.splice(result.source.index, 1);

			const endTaskList = Array.from(endBoard.tasks);
			endTaskList.splice(result.destination.index, 0, reorderedItem);

			const newBoards = boards.map((board) => {
				if (board.entityId === startBoard.entityId) {
					return { ...board, tasks: startTaskList };
				}
				if (board.entityId === endBoard.entityId) {
					return { ...board, tasks: endTaskList };
				}
				return board;
			});

			set({ boards: newBoards });
		}
	},

	reorderBoards: (result) => {
		const { source, destination } = result;

		if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
			return;
		}

		const { boards } = get();
		const [removed] = boards.splice(source.index, 1);
		boards.splice(destination.index, 0, removed);

		set({ boards });
	},

	createTask: async (name, boardId) => {
		const { boards, tasks } = get();
		console.log(tasks, "tasks");
		try {
			const { task: newTask } = await createNewTask(name, boardId);
			set({
				tasks: [newTask].concat(tasks),
				 /* boards: boardId ? boards.map((board) => {
					if (board.entityId === boardId) {
						return {
							...board,
							tasks: [...board.tasks, newTask]
						};
					}
					return board;
				}) : boards */
			});
		} catch (error) {
			console.error("Error creating task:", error);
		}
	},
	updateTask: (id: string, title: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.map((task) => ({
				...task,
				title: task.entityId === id ? title : task.name
			}))
		});
	},
	removeTask: (id: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.filter((task) => task.entityId !== id)
		});
	},
}));
