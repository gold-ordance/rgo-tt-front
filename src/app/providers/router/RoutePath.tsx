import { ROUTES } from "@shared/constants";

import { EAppRoutes } from "./interfaces";

export const RoutePath: {} = {
  [ EAppRoutes.Main ]: ROUTES.HOME,
  [ EAppRoutes.Backlog ]: ROUTES.BACKLOG,
  [ EAppRoutes.Projects ]: ROUTES.PROJECTS,
};
