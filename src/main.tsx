import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./app/App";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<ErrorBoundary>
			<ChakraProvider>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ChakraProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
