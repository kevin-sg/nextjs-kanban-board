'use client';

import { TaskModel, Status } from '@/types/task';

export const getTasksByStatus = (tasks: TaskModel[], status: Status) => {
	return tasks.filter((task) => task.status === status);
};

export const getTaskById = (tasks: TaskModel[], id: string) => {
	return tasks.find((task) => task.id === id);
};
