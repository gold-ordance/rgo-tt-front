import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "/",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });
export const api = createApi({
	reducerPath: "api",
	baseQuery: baseQueryWithRetry,
	tagTypes: ["Statuses"],
	endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
	endpoints: () => ({
		getPost: () => "test",
	}),
});
