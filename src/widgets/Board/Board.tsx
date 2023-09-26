import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { Badge, Box, Flex, Input, Tooltip } from "@chakra-ui/react";

export const Board = ({ board }) => {
	const [showInput, setShowInput] = useState(false);
	const [taskTitle, setTaskTitle] = useState("");

	const createTaskInBoard = (e) => {
		e.preventDefault();
		const todoText = taskTitle.trim();
		if (todoText) {
			// createTask(todoText, board.entityId);
			setTaskTitle("");
			setShowInput(false);
		}
	};

	const handleDragEnd = (result) => {
		// reorderTasks(result);
	};

	return (
		<Box py="5" px="2" bg="#F7F8F9" minHeight={500} overflowY="auto">
			<Box display="flex" alignItems="baseline" justifyContent="space-between">
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
					<Flex gap={3} alignItems="center">
						<div>
							{/*	{tasks.length} */}
							- tasks
						</div>
						<Tooltip label="Создать задачу">
							<Badge borderRadius="full" fontSize={20} onClick={() => setShowInput(true)} cursor="pointer">
								+
							</Badge>
						</Tooltip>
					</Flex>
				</Box>

			</Box>

			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId={board.id}>
					{(provided) => (
						<Box {...provided.droppableProps} ref={provided.innerRef}>
							{[]?.map((task, index) => (
								<Draggable key={task.entityId} draggableId={task.entityId} index={index}>
									{(provided) => (
										<Box
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
											bg="#f1f1f1"
											p="2"
											my="2"
											borderRadius="lg"
										>
											{task.name}
										</Box>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</Box>
					)}
				</Droppable>
			</DragDropContext>

			{showInput && (
				<form onSubmit={createTaskInBoard}>
					<Input
						value={taskTitle}
						onChange={(e) => setTaskTitle(e.target.value)}
						placeholder="Enter task title"
					/>
				</form>
			)}
		</Box>
	);
};
