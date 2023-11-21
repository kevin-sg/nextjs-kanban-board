'use client';

export type Status = 'to_do' | 'in_progress' | 'done' | 'unassigned';
export type Priority = 'low' | 'medium' | 'high';

// "dev": "cross-env NODE_OPTIONS='--inspect --max-old-space-size=1024' next dev",

export interface TaskModel {
	id: string;
	userId: string;
	title: string;
	description: string;
	status?: Status;
	priority?: Priority;
}

export type BoardSection = {
	[name: string]: TaskModel[];
};
