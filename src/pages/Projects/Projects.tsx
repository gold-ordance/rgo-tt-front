import React from "react";

import { ProjectsTable } from "@entities/Projects";
import { CreateNewProject } from "@features";

export const Projects = () => (
	<>
		<ProjectsTable />
		<CreateNewProject />
	</>
);
