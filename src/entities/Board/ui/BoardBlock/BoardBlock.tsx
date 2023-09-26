import React from "react";

import { useGetStatusesQuery } from "@app/providers/StoreProvider/services";
import { Box } from "@chakra-ui/react";
import { Board } from "@widgets";

import styles from "./BoardBlock.module.scss";

export const BoardBlock = () => {
	const { data, isLoading, isFetching, isError } = useGetStatusesQuery();

	if (isError) return <div>An error has occurred!</div>;

	if (isLoading) return <p>loading</p>;

	console.log(data, "data");

	return (
		<Box maxW="100%" overflow="hidden" mx="2" my="5">
			<div className={styles.boards}>
				{data?.taskStatuses?.map((board) => (
					<Board key={board.entityId} board={board} />
				))}
			</div>
		</Box>
	);
};
