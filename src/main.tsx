import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@app/providers/StoreProvider";
import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./app/App";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ErrorBoundary>
			<ChakraProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
