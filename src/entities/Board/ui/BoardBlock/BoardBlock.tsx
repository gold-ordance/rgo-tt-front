import React from "react";

import { store } from "@app/providers/StoreProvider";
import { Box } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = () => {
	const { tasks } = store();
	console.log(tasks, "tasks");

	return (
		<Box maxW="100%" overflow="hidden" mx="2" my="5">
			<div className={styles.boards}>
				<Board tasks={tasks} />

			</div>
		</Box>
	);
};
