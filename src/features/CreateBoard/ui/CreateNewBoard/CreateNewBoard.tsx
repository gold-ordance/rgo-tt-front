import React from "react";
import { useForm } from "react-hook-form";

import { store } from "@app/providers/StoreProvider";
import { Button, Input, Text, } from "@chakra-ui/react";

type BordInput = {
	name: string;
};

export const CreateNewBoard = () => {
	const { createBoard } = store();
	const { register, handleSubmit, reset, formState: { errors } } = useForm<BordInput>();

	const onSubmit = (data: BordInput) => {
		const boardText = data.name.trim();
		if (boardText) {
			createBoard(boardText);
			reset();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" name="name" placeholder="Enter a board name" {...register("name", { required: true })} />
				{errors.name && <Text color="red">This field is required</Text>}
				<Button type="submit">Add board</Button>
			</form>
		</div>
	);
};
