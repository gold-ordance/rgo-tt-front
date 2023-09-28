import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const Graphic = ({ data }) => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const visitsData = data.map((project) => {
			const visits = localStorage.getItem(`project_${project.entityId}_visits`) || 0;
			return {
				projectName: project.name,
				visits: parseInt(visits), // TODO: refactor
			};
		});

		visitsData.sort((a, b) => b.visits - a.visits);

		const chartData = visitsData.map((entry) => ({
			label: entry.projectName,
			data: [entry.visits],
			backgroundColor: "rgba(75, 192, 192, 0.6)",
		}));

		setChartData(chartData);
	}, [data]);
	return (
		<div>
			<h2>График посещений проектов</h2>
			<Bar
				data={{
					labels: chartData.map((entry) => entry.label),
					datasets: chartData,
				}}
			/>
		</div>
	);
};
