import React, { Suspense } from "react";

import { Box, CircularProgress, Container } from "@chakra-ui/react";
import { Sidebar } from "@widgets";

import { AppRoute } from "./providers/router/AppRoute";

export const App = () => (

	<Box width="100%" height="100vh" bg="#f1f1f1">
		<Container maxW="1470px">
			 <Sidebar />
			<Suspense fallback={<CircularProgress isIndeterminate color="green.300" />}>
				<div className="content-page">
					<AppRoute />
				</div>
			</Suspense>
		</Container>
	</Box>
);
