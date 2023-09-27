import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { useCreateBoardMutation } from "@app/providers/StoreProvider/services";
import { Box, Button, Input, Text, Tooltip } from "@chakra-ui/react";
import { useOutsideClick } from "@shared/hooks";

type BoardInput = {
	name: string;
};

export const CreateNewProject = () => {
	const [isAdding, setIsAdding] = useState(false);
	const [createBoard, { isLoading: isLoadingCreateBoard }] = useCreateBoardMutation();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<BoardInput>();

	const formRef = useRef(null);

	useOutsideClick(formRef, () => {
		if (isAdding) {
			setIsAdding(false);
		}
	});

	const onSubmit = (data: BoardInput) => {
		const boardText = data.name.trim();
		if (boardText) {
			createBoard({ name: boardText });
			reset();
			setIsAdding(false);
		}
	};

	return (
		<div>
			{isAdding ? (
				<Box ref={formRef}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							type="text"
							placeholder="Enter a board name"
							{...register("name", { required: true })}
						/>
						{errors.name && <Text color="red">This field is required</Text>}
						<Button type="submit">Add board</Button>
					</form>
				</Box>
			) : (
				<Tooltip label="Создать столбец">
					<Button
						onClick={() => setIsAdding(true)}
						isLoading={isLoadingCreateBoard}
					>
						<div>+</div>
					</Button>
				</Tooltip>
			)}
		</div>
	);
};
