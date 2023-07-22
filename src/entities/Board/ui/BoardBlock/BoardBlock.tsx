import React, { useEffect } from "react";

import { store } from "@app/providers/StoreProvider";
import { Box, Button } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = () => {
	const { tasks, fetchTasks, boards } = store();

	useEffect(() => {
		fetchTasks();
	}, []);

	console.log(boards, "boards");

	return (
		<Box maxW="100%" overflow="hidden" mx="2" my="5">
			<div className={styles.boards}>
				{boards?.map((board) => (
					<Board tasks={tasks} key={board.id} board={board} />
				))}
			</div>
		</Box>
	);
};
