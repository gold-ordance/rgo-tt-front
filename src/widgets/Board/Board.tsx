import React from "react";

import { Badge, Box } from "@chakra-ui/react";

export const Board = () => (
	 <Box py="5" px="2" bg="#F7F8F9">
		<Box display="flex" alignItems="baseline">
			<Badge borderRadius="full" colorScheme="teal">
				New
			</Badge>
			<Box
				color="gray.500"
				fontWeight="semibold"
				letterSpacing="wide"
				fontSize="xs"
				textTransform="uppercase"
				ml="2"
		 >
				13 tasks
			</Box>
		</Box>

		<Box bg="#f1f1f1" p="2" my="2" borderRadius="lg">1</Box>
		<Box bg="#f1f1f1" p="2" my="2" borderRadius="lg">2</Box>
		<Box bg="#f1f1f1" p="2" my="2" borderRadius="lg">3</Box>
		<Box bg="#f1f1f1" p="2" my="2" borderRadius="lg">4</Box>
	 </Box>
 );
