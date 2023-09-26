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
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	tagTypes: ["Board"],
	endpoints: (build) => ({
		getBoards: build.query<Boards, void>({
			query: () => "tasks-board",
			providesTags: (result) => (result
				? [
					...result.map(({ id }) => ({ type: "Board" as const, id })),
					{ type: "Board", id: "LIST" },
				]
				: [{ type: "Board", id: "LIST" }]),
		}),
		getBoard: build.query<Board, string>({
			query: (id) => `boards/${id}`,
			providesTags: (result, error, id) => [{ type: "Board", id }],
		}),
	}),
});

export const {
	useGetBoardsQuery,
	useGetBoardQuery
} = boardsApi;
