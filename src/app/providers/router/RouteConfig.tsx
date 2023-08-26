import { Backlog, HomePage, Projects } from "../../../pages";

import { EAppRoutes, TAppRoutesProps, } from "./interfaces";
import { RoutePath } from "./routePath";

export const routeConfig: Record<EAppRoutes, TAppRoutesProps> = {
	[ EAppRoutes.Main ]: {
		path: RoutePath.main,
		element: <HomePage />,
	},

	[ EAppRoutes.Backlog ]: {
		path: RoutePath.backlog,
		element: <Backlog />,
	},

	[ EAppRoutes.Projects ]: {
		path: RoutePath.projects,
		element: <Projects />,
	},

	[ EAppRoutes.Projects ]: {
		path: `${RoutePath.projects}/:id`,
		element: <div>project </div>,
	},
};
