import axios from "axios";

import { Statuses, Tasks } from "@shared/api/types";

import { BASE_URL } from "../constants";

export const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

export const createNewProject = async (name: string) => {
	const response = await api.post("/tasks-board", { name });
	return response.data;
};

export const createNewTask = async (name: string, boardId: number) => {
	const response = await api.post("/tasks", { name, boardId });
	return response.data;
};

export const getTasks = async (boardId):Promise<Tasks> => {
	const response = await api.get("/tasks", {
		params: {
			boardId
		}
	});
	return response.data;
};

export const getStatuses = async ():Promise<Statuses> => {
	const response = await api.get("/statuses");
	return response.data;
};

export const getProjects = async () => {
	const response = await api.get("/tasks-board");
	return response.data;
};
