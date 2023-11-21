'use client';

import { INITIAL_TASKS } from '@/data';
import { TaskModel } from '@/types/task';
import { create } from 'zustand';

// interface TaskModel {
// 	userId: string;
// 	id: string;
// 	title: string;
// 	content: string;
// 	isCompleted?: boolean;
// 	status?: 'not-started' | 'in-progress' | 'done';
// 	priority?: 'low' | 'medium' | 'high';
// }

interface TaskState {
	tasks: TaskModel[];
	addTask: (payload: TaskModel) => void;
	updateTask: (taskId: string, payload: TaskModel) => void;
	removeTask: (taskId: string) => void;
}

// status: not started, in progress, done
// priority: low, medium, high

export const useTaskStore = create<TaskState>()((set, get) => ({
	tasks: INITIAL_TASKS,
	addTask: (payload) => {
		const tasks = get().tasks.map((task) => (task.title !== payload.title ? payload : task));
		set({ tasks });
	},
	updateTask: (taskId, payload) => {
		const tasks = get().tasks.map((task) => (task.id === taskId ? payload : task));
		set({ tasks });
	},
	removeTask: (taskId) => set({ tasks: get().tasks.filter((task) => task.id !== taskId) }),
}));
