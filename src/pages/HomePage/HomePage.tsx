import React from "react";

import { BoardBlock } from "@entities/Board";
import { AddNewTask } from "@features/AddNewTask";

export const HomePage = () => (
	<div>
		<BoardBlock />
		<AddNewTask />
	</div>
);
