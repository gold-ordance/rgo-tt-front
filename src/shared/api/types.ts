interface TaskStatus {
	entityId: number;
	name: string;
}

export interface Statuses {
	taskStatuses: TaskStatus[];
}

interface Task {
	entityId: number;
	name: string;
	board: {
		entityId: number;
		name: string
	}
}

export interface Tasks {
	tasks: Task[];
}
