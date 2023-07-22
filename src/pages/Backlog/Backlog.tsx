import React from "react";

import { Tasks } from "@entities/Tasks";
import { AddNewTask } from "@features";

export const Backlog = () => (
	<div>
		<Tasks />
		<AddNewTask />
	</div>
);
