'use client';

import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

import type { FCC } from 'react';

type SortableItemProps = {
	id: string;
};

export const SortableItem: FCC<SortableItemProps> = ({ id, children }) => {
	const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
		id,
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0 : 1,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<div>{children}</div>
		</div>
	);
};
