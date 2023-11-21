'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import c from 'clsx';

import { MovableItem, Chip } from '@/components';
import { SortableItem } from './SortableItem';

import type { FCC } from 'react';
import type { TaskModel } from '@/types/task';

type ColumnProps = {
	id: string;
	title: string;
	items: TaskModel[];
};

export const Column: FCC<ColumnProps> = ({ id, title, items }) => {
	const color = title.includes('to_do')
		? 'default'
		: title.includes('in_progress')
		? 'primary'
		: title.includes('done')
		? 'success'
		: undefined;

	const { setNodeRef } = useDroppable({
		id,
	});

	return (
		<div
			className={c(
				'w-full h-auto p-2 rounded-lg',
				color === 'default' && 'bg-default/5',
				color === 'primary' && 'bg-primary/10',
				color === 'success' && 'bg-success/5',
			)}
		>
			<div className='mt-2 mb-4'>
				<Chip label={title} color={color} variant='dot' radius='xl' />
				<span
					className={c(
						'ml-4',
						(color === 'default' || !color) && 'text-default-500',
						color === 'primary' && 'text-primary-300',
						color === 'success' && 'text-success-300',
					)}
				>
					{items.length}
				</span>
			</div>

			<SortableContext id={id} items={items} strategy={verticalListSortingStrategy}>
				<div ref={setNodeRef} className='flex flex-col gap-2'>
					{items.map((item) => (
						<SortableItem key={item.id} id={item.id}>
							<MovableItem item={item} color={color} />
						</SortableItem>
					))}
				</div>
			</SortableContext>
		</div>
	);
};
