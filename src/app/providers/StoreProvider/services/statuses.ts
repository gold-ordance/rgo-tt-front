import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/constants";

interface Status {
	name: string;
	entityId: number
}

type Statuses = Status[]

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
			providesTags: [{ type: "Statuses", id: "LIST" }]
		}),
	}),
});

export const {
	useGetStatusesQuery
} = statusesApi;
