import React from "react";
import { useParams } from "react-router-dom";

import { useBoardQuery } from "@app/providers/StoreProvider/services";
import { BoardBlock } from "@entities/Board";
import { CreateNewBoard } from "@features";

export const ProjectPage = () => {
	const { id } = useParams();
	const { data: board } = useBoardQuery({ boardId: id });

	return (
		<div>
			{id}
			{" "}
			- project
			<BoardBlock boardInfo={board} />
			<CreateNewBoard />
		</div>
	);
};
