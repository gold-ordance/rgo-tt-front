import React, { useEffect } from "react";

import { store } from "@app/providers/StoreProvider";
import { Box, Button } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = () => {
	const { fetchStatuses, boards } = store();

	useEffect(() => {
		fetchStatuses();
	}, [fetchStatuses]);

	return (
		<Box maxW="100%" overflow="hidden" mx="2" my="5">
			<div className={styles.boards}>
				{boards?.map((board) => (
					<Board key={board.entityId} board={board} />
				))}
			</div>
		</Box>
	);
};
