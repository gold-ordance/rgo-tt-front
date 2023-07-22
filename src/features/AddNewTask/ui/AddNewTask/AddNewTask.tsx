import React from "react";
import { useForm } from "react-hook-form";

import { store } from "@app/providers/StoreProvider";
import { Button, Input, Text, } from "@chakra-ui/react";

type TodoFormInput = {
	title: string;
};

export const AddNewTask = () => {
	const { createTask } = store();
	const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoFormInput>();

	const onSubmit = (data: TodoFormInput) => {
		const todoText = data.title.trim();
		if (todoText) {
			createTask(todoText);
			reset();
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" name="todo" placeholder="Enter a todo" {...register("title", { required: true })} />
				{errors.title && <Text color="red">This field is required</Text>}
				<Button type="submit">Add Todo</Button>
			</form>
		</div>
	);
};
