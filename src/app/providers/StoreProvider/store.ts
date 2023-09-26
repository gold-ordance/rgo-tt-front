import { statusesApi } from "@app/providers/StoreProvider/services";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		// [tasksApi.reducerPath]: tasksApi.reducer,
		// [boardsApi.reducerPath]: boardsApi.reducer,
		[statusesApi.reducerPath]: statusesApi.reducer,
	},
	middleware: (getDefaultMiddleware) => (
		getDefaultMiddleware().concat(
			[statusesApi.middleware]
		)
	)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
