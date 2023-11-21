'use client';

import { v4 as uuid } from 'uuid';

import type { TaskModel } from '@/types/task';

export const INITIAL_TASKS: TaskModel[] = [
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #1',
		description: 'Minim qui minim ullamco dolore in ad non consequat mollit. ',
		priority: 'low',
		status: 'to_do',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #2',
		description: 'Magna sint fugiat culpa consequat deserunt. ',
		priority: 'high',
		status: 'to_do',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #3',
		description: 'Incididunt commodo quis commodo qui est minim proident occaecat. ',
		priority: 'medium',
		status: 'in_progress',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #4',
		description: 'Occaecat magna laboris ullamco duis. ',
		priority: 'high',
		status: 'unassigned',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #5',
		description: 'Nulla officia non exercitation eu nulla esse enim et id mollit. ',
		priority: 'high',
		status: 'unassigned',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #6',
		description: 'Nulla officia non exercitation eu nulla esse enim et id mollit. ',
		priority: 'medium',
		status: 'done',
	},
	{
		id: uuid(),
		userId: 'test-userId',
		title: 'Box #7',
		description: 'Nulla officia non exercitation eu nulla esse enim et id mollit. ',
		priority: 'low',
		status: 'done',
	},
];
