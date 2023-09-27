import React, { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box, CircularProgress, Container } from "@chakra-ui/react";
import { Sidebar } from "@widgets";

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => (
	<Box width="100%" height="100vh" bg="#f1f1f1" overflow="auto">
		<Container maxW="1470px">
			<Sidebar />
			<Suspense fallback={<CircularProgress isIndeterminate color="green.300" />}>
				<div className="content-page">
					{children}
					<Outlet />
				</div>
			</Suspense>
		</Container>
	</Box>
);
