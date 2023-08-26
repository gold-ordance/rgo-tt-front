import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { store } from "@app/providers/StoreProvider";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const ProjectsTable = () => {
	const { fetchProjects, projects } = store();

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	console.log(projects, "rpoecjts");

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
						{projects.map((project) => (
							<Tr key={project.entityId}>
								<Link to={`/projects/${project.entityId}}`}>
									<Td>{project.name}</Td>
								</Link>
								<Td>Ключ</Td>
								<Td>Тип</Td>
								<Td>Руководитель</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</Box>
		</div>
	);
};
