import React from "react";

import { Box } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = () => (
	<Box maxW="100%" overflow="hidden" mx="2" my="5">
		<div className={styles.boards}>
			<Board />
			<Board />
			<Board />
		</div>
	</Box>
);
