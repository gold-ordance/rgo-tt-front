import React from "react";

import { useGetStatusesQuery } from "@app/providers/StoreProvider/services";
import { Box } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = ({ boardInfo }) => {
	const { data, isLoading, isFetching, isError } = useGetStatusesQuery();

	if (isError) return <div>An error has occurred!</div>;

	if (isLoading) return <p>loading</p>;

	return (
		<Box maxW="100%" overflow="hidden" mx="2" my="5">
			<div className={styles.boards}>
				{data?.map((board) => (
					<Board key={board.entityId} board={board} boardInfo={boardInfo} />
				))}
			</div>
		</Box>
	);
};
