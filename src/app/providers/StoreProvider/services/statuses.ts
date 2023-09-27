import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "@shared/constants";

interface Status {
	name: string;
	entityId: number
}

export type Message = {
	message: unknown;
	statusCode: string
}

type Statuses = Status[] | Message

export const statusesApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	tagTypes: ["Statuses"],
	endpoints: (build) => ({
		getStatuses: build.query<Statuses, void>({
			query: () => ({
				url: "/statuses",
				method: "GET"
			}),
			providesTags: [{type: "Statuses", id: "LIST"}],
			transformResponse: ((response: { taskStatuses: Status[] }) => response.taskStatuses)
		}),
	}),
});

export const {
	useGetStatusesQuery
} = statusesApi;
