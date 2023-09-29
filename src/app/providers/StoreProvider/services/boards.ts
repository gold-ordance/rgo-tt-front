import { Task } from "@app/providers/StoreProvider/services/tasks";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/constants";

interface Board {
	name: string;
	entityId: number;
	createdAt: number;
	tasks: Task[]
}

type Boards = Board[]

export const boardsApi = createApi({
	reducerPath: "boardsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	tagTypes: ["Board"],
	endpoints: (build) => ({
		getBoards: build.query<Boards, void>({
			query: () => ({
				url: "tasks-board",
				method: "GET"
			}),
			providesTags: [{ type: "Board", id: "LIST" }],
			transformResponse: ((response: { boards: Board[] }) => response.boards)
		}),
		createBoard: build.mutation<string, Partial<Board>>({
			query(body) {
				return {
					url: "tasks-board",
					method: "POST",
					body,
				};
			},
			invalidatesTags: [{ type: "Board", id: "LIST" }],
		}),
		deleteBoard: build.mutation<{ success: boolean; entityId number }, number>({
			query(entityId) {
				return {
					url: `tasks-board/${entityId}`,
					method: "DELETE",
				};
			},
			invalidatesTags: (post) => [{ type: "Board", id: post?.entityId }],
		}),
	}),
});

export const {
	useGetBoardsQuery,
	useCreateBoardMutation
} = boardsApi;
