import axios from "axios";
import { v4 as id } from "uuid";
import { create } from "zustand";

interface Task {
	title: string;
	id: string;
	createdAt: number;
	completed?: boolean;
}

interface Board {
	name: string;
	id: string;
	createdAt: number;
}

interface Tasks {
	tasks: Task[];
	boards: Board[];
	createTask: (task: string) => void;
	updateTask: (id: string, task: string) => void;
	removeTask: (id: string) => void;
	createBoard: (name: string) => void;
}

export const store = create<Tasks>((set, get) => ({
	tasks: [],
	boards: [],

	fetchTasks: async () => {
		const result = await axios.get("http://localhost:8080/tasks");
		set({ tasks: result });
	},

	createBoard: (name: string) => {
		const { boards } = get();

		const newBoard = {
			id: id(),
			name,
			createdAt: Date.now(),
		};

		set({
			boards: [newBoard].concat(boards)
		});
	},

	createTask: async (title) => {
		const { tasks } = get();
		const newTask = {
			id: id(),
			title,
			createdAt: Date.now(),
		};
		set({
			tasks: [newTask].concat(tasks)
		});
	},
	updateTask: (id: string, title: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.map((task) => ({
				...task,
				title: task.id === id ? title : task.title
			}))
		});
	},
	removeTask: (id: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.filter((task) => task.id !== id)
		});
	},
}));
