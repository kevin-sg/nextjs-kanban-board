'use client';

import { COLUMN_NAMES } from '@/components/layouts/tasks/constant';
import { getTasksByStatus } from './task.lib';

import type { BoardSection, Status, TaskModel } from '@/types/task';

export const initializeBoard = (tasks: TaskModel[]) => {
	const boardSections: BoardSection = {};

	Object.keys(COLUMN_NAMES).forEach((boardSectionKey) => {
		boardSections[boardSectionKey] = getTasksByStatus(tasks, boardSectionKey as Status);
	});

	return boardSections;
};

export const findBoardSectionContainer = (boardSections: BoardSection, id: string) => {
	if (id in boardSections) {
		return id;
	}

	const container = Object.keys(boardSections).find((key) => boardSections[key].find((item) => item.id === id));
	return container;
};
