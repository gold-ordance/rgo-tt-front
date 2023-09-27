import React from "react";
import { Link } from "react-router-dom";

import { useGetBoardsQuery } from "@app/providers/StoreProvider/services";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { ROUTES } from "@shared/constants";

export const ProjectsTable = () => {
	const { data, isLoading, isFetching, isError } = useGetBoardsQuery();

	if (isError) return <div>An error has occurred!</div>;

	if (isLoading) return <p>loading</p>;

	console.log(data, "datra");

	return (
		<div>
			<Box w="100%" p={4}>

				<Table variant="striped" colorScheme="gray">
					<Thead>
						<Tr>
							<Th>Имя</Th>
							<Th>Ключ</Th>
							<Th>Тип</Th>
							<Th>Руководитель</Th>
							<Th isNumeric>Actions</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data?.map((project) => (
							<Tr key={project.entityId}>
								<Link to={`${ROUTES.PROJECTS} ${project.entityId}}`}>
									<Td>{project.entityId}</Td>
									{/* <Td>Ключ</Td> */}
									{/* <Td>Тип</Td> */}
									{/* <Td>Руководитель</Td> */}
								</Link>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</div>
	);
};
