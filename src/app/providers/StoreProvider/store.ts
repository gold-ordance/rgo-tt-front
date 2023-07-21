import { v4 as id } from "uuid";
import { create } from "zustand";

interface Task {
	title: string;
	id: string;
	createdAt: number;
	completed?: boolean;
}

interface Tasks {
	tasks: Task[];
	createTask: (task: string) => void;
	updateTask: (string: number, task: string) => void;
	removeTask: (string: number) => void;
}

export const store = create<Tasks>((set, get) => ({
	tasks: [],
	createTask: (title) => {
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
