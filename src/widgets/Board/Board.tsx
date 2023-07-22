import React from "react";

import { Badge, Box } from "@chakra-ui/react";

export const Board = ({ tasks, board }) => {
	console.log(board, "board");
	return (
		<Box py="5" px="2" bg="#F7F8F9">
			<Box display="flex" alignItems="baseline">
				<Badge borderRadius="full" colorScheme="teal">
					{board.name}
				</Badge>
				<Box
					color="gray.500"
					fontWeight="semibold"
					letterSpacing="wide"
					fontSize="xs"
					textTransform="uppercase"
					ml="2"
				>
					<div>
						{tasks.length}

						- tasks
					</div>
				</Box>
			</Box>

			{tasks.map((task) => (
				<Box bg="#f1f1f1" p="2" my="2" borderRadius="lg" key={task.id}>{task.title}</Box>
			))}

		</Box>
	);
};
