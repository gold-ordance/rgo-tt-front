import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { store } from "@app/providers/StoreProvider";
import { Box, Button, Input, Text, Tooltip } from "@chakra-ui/react";
import { useOutsideClick } from "@shared/hooks";

type BoardInput = {
	name: string;
};

export const CreateNewProject = () => {
	const { createProject, projects } = store();
	const { register, handleSubmit, reset, formState: { errors } } = useForm<BoardInput>();
	const [isAdding, setIsAdding] = useState(false);
	const formRef = useRef(null);

	useOutsideClick(formRef, () => {
		if (isAdding) {
			setIsAdding(false);
		}
	});

	const onSubmit = (data: BoardInput) => {
		const boardText = data.name.trim();
		if (boardText) {
			createProject(boardText);
			reset();
			setIsAdding(false);
		}
	};

	console.log(projects, "proecjts");

	return (
		<div>
			{isAdding ? (
				<Box ref={formRef}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input type="text" name="name" placeholder="Enter a board name" {...register("name", { required: true })} />
						{errors.name && <Text color="red">This field is required</Text>}
						<Button type="submit">Add board</Button>
					</form>
				</Box>
			) : (
				<Tooltip label="Создать столбец">
					<Button onClick={() => setIsAdding(true)}>
						<div>+</div>
					</Button>
				</Tooltip>
			)}
		</div>
	);
};
