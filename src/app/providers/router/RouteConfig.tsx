import { HomePage } from "../../../pages";

import { EAppRoutes, } from "./interfaces";
import { RoutePath } from "./routePath";

export const routeConfig: {} = {
  [ EAppRoutes.Main ]: {
	path: RoutePath.main,
	element: <HomePage />,
  },
};
