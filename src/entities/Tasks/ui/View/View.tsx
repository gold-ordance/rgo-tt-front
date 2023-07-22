import React from "react";

import { store } from "@app/providers/StoreProvider";
import { Button, Editable, EditablePreview, EditableTextarea, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

export const Tasks = () => {
	const { tasks, removeTask, updateTask } = store();

	const handleUpdateTask = (id, updatedTitle) => {
		updateTask(id, updatedTitle);
	};

	return (
		<div>
			<UnorderedList>
				{tasks.map((task) => (
					<Flex align="center" key={task.id}>
						<Editable
							key={task.id}
							defaultValue={task.title}
							onSubmit={(value) => handleUpdateTask(task.id, value)}
						>
							<EditablePreview />
							<EditableTextarea />
						</Editable>
						<Button onClick={() => removeTask(task.id)}>Delete</Button>
					</Flex>
				))}
			</UnorderedList>
		</div>
	);
};
