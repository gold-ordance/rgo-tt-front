import React from "react";

import { useGetBoardsQuery } from "@app/providers/StoreProvider/services";
import { Graphic } from "@entities/Chart/ui/Graphic";
import { ProjectsTable } from "@entities/Projects";
import { CreateNewProject } from "@features";

export const Projects = () => {
	const { data, isLoading, isFetching, isError } = useGetBoardsQuery();

	if (isError) return <div>An error has occurred!</div>;

	if (isLoading) return <p>loading</p>;

	return (
		<>
			<ProjectsTable data={data} />
			<CreateNewProject />
			<Graphic data={data} />
		</>
	);
};
