import React from "react";

import { ProjectsTable } from "@entities/Projects";
import { CreateNewProject } from "@features";

export const Projects = () => (
	<div>
		<ProjectsTable />
		<CreateNewProject />
	</div>
	);
