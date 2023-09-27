import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@app/providers/layout/layout";
import { Backlog, ErrorPage, ProjectPage, Projects } from "@pages";
import { ROUTES } from "@shared/constants";

export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: ROUTES.PROJECTS,
				element: <Projects />,
			},
			{
				path: ROUTES.PROJECT_ID,
				element: <ProjectPage />
			},
			{
				path: ROUTES.BACKLOG,
				element: <Backlog />
			},
		]
	},
]);
