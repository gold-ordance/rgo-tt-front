import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "@app/providers/router/AppRoute";
import { store } from "@app/providers/StoreProvider";
import { ChakraProvider } from "@chakra-ui/react";

import { ErrorBoundary } from "./app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ErrorBoundary>
		<ChakraProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</ChakraProvider>
	</ErrorBoundary>
);
