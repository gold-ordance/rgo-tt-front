import React from "react";

import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const Tasks = () =>
	// const handleUpdateTask = (id, updatedTitle) => {
	// 	updateTask(id, updatedTitle);
	// };

	 (
		<Box w="100%" p={4}>
			<Table variant="striped" colorScheme="gray">
				<Thead>
					<Tr>
						<Th>Task</Th>
						<Th isNumeric>Actions</Th>
					</Tr>
				</Thead>
				<Tbody>
					{[].map((task) => (
						<Tr key={task.entityId}>
							<Td>{task.name}</Td>
							<Td isNumeric>
								{/* <Button size="xs" colorScheme="red" onClick={() => removeTask(task.entityId)}>Delete</Button> */}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
