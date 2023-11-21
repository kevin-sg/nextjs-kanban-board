'use client';

import { type FCC, useMemo, useState } from 'react';
import {
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	TouchSensor,
	useSensors,
	DragEndEvent,
	DragStartEvent,
	DragOverEvent,
	closestCenter,
	DropAnimation,
	defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { Column } from './Column';
import { INITIAL_TASKS } from '@/data';
import { MovableItem } from '@/components';
import { findBoardSectionContainer, initializeBoard } from '@/libs';

import type { BoardSection } from '@/types/task';
import { useTaskStore } from '@/store/userStore';

export const TaskLayout: FCC = () => {
	// const tasks = INITIAL_TASKS;
	const tasks = useTaskStore((store) => store.tasks);

	const initialBoardSections = initializeBoard(tasks);
	const [boardSections, setBoardSections] = useState<BoardSection>(initialBoardSections);

	const [activeId, setActiveId] = useState<string | null>(null);

	const sensors = useSensors(
		useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);

	const task = useMemo(() => {
		return tasks.find((e) => e.id === activeId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeId]);

	const handleDragStart = ({ active }: DragStartEvent): void => {
		setActiveId(active.id.toString());
	};

	const handleDragOver = ({ active, over }: DragOverEvent): void => {
		// Find the containers
		const activeContainer = findBoardSectionContainer(boardSections, active.id.toString());
		const overContainer = findBoardSectionContainer(boardSections, over?.id.toString()!);

		if (!activeContainer || !overContainer || activeContainer === overContainer) {
			return;
		}

		setBoardSections((boardSection) => {
			const activeItems = boardSection[activeContainer];
			const overItems = boardSection[overContainer];

			// Find the indexes for the items
			const activeIndex = activeItems.findIndex((item) => item.id === active.id.toString());
			const overIndex = overItems.findIndex((item) => item.id !== over?.id.toString());

			return {
				...boardSection,
				[activeContainer]: [...boardSection[activeContainer].filter((item) => item.id !== active.id.toString())],
				[overContainer]: [
					...boardSection[overContainer].slice(0, overIndex),
					boardSections[activeContainer][activeIndex],
					...boardSection[overContainer].slice(overIndex, boardSection[overContainer].length),
				],
			};
		});
	};

	const handleDragEnd = ({ active, over }: DragEndEvent): void => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id.toString());
		const overContainer = findBoardSectionContainer(boardSections, over?.id.toString()!);

		if (!activeContainer || !overContainer || activeContainer !== overContainer) {
			return;
		}

		const activeIndex = boardSections[activeContainer].findIndex((task) => task.id === active.id.toString());
		const overIndex = boardSections[overContainer].findIndex((task) => task.id === over?.id.toString());

		if (activeIndex !== overIndex) {
			setBoardSections((boardSection) => ({
				...boardSection,
				[overContainer]: arrayMove(boardSection[overContainer], activeIndex, overIndex),
			}));
		}

		setActiveId(null);
	};

	const dropAnimation: DropAnimation = {
		sideEffects: defaultDropAnimationSideEffects({
			styles: { active: { opacity: '0' } },
		}),
	};

	// console.log(boardSections);

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragCancel={() => {
				setActiveId(null);
			}}
		>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 xl:gap-10 items-start'>
				{Object.keys(boardSections).map((sectionKey) => (
					<Column key={sectionKey} id={sectionKey} title={sectionKey} items={boardSections[sectionKey]} />
				))}
			</div>
			<DragOverlay dropAnimation={dropAnimation}>{task ? <MovableItem item={task} /> : null}</DragOverlay>
		</DndContext>
	);
};
