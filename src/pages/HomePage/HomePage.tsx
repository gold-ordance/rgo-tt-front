import React from "react";

import { BoardBlock } from "@entities/Board";
import { CreateNewBoard } from "@features";

export const HomePage = () => (
	<div>
		<BoardBlock />
		<CreateNewBoard />
	</div>
);
