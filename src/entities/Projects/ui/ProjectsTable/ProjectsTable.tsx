import React from "react";
import { Link } from "react-router-dom";

import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const handleProjectClick = (project) => {
	const visits = localStorage.getItem(`project_${project.entityId}_visits`) || 0;

	localStorage.setItem(`project_${project.entityId}_visits`, parseInt(visits) + 1);
}; // TODO: refactor
export const ProjectsTable = ({ data }) => (
	<div>
		<Box w="100%" p={4} maxHeight={400} overflow="auto">
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
							<Link to={`/projects/${project.entityId}`} onClick={() => handleProjectClick(project)}>
								<Td>{project.name}</Td>
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
