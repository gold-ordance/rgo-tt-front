import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@app/providers/layout/layout";
import { ROUTES } from "@shared/constants";

import { ErrorPage, HomePage, Projects } from "../../../pages";

export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: ROUTES.HOME,
				element: <HomePage />,
			},
			{
				path: ROUTES.PROJECTS,
				element: <Projects />
			},
		]
	},
]);
