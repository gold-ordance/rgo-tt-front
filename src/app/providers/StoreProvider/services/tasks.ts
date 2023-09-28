import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/constants";

export interface Task {
	name: string;
	entityId: string;
	createdAt: number;
	completed?: boolean;
	boardId?: string
}

export const tasksApi = createApi({
	reducerPath: "tasksAPi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: (builder) => ({
		tasks: builder.query({
			query: () => ({
				url: "/tasks",
				method: "GET"
			}),
			providesTags: [{ type: "Tasks", id: "LIST" }]
		}),
		task: builder.query<Task, number>({
			query: (name) => `/tasks/${name}`,
		}),
		board: builder.query<Task[], { boardId?: string }>({
			query: ({ boardId }) => ({
				url: "/tasks",
				method: "GET",
				params: { boardId },
			}),
			transformResponse: ((response: { tasks: Task[] }) => response.tasks),
			providesTags: [{ type: "Tasks", id: "LIST" }],
		}),
	}),
});
export const { useTasksQuery, useTaskQuery, useBoardQuery } = tasksApi;
