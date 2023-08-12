import { RouteProps } from "react-router-dom";

export enum EAppRoutes {
  Main = "main",
  Backlog = "backlog",
  Projects = "projects"
}

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean;
};
