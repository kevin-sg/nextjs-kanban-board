'use client';

import { useState, type FCC } from 'react';

// import { FaStickyNote } from 'react-icons/fa';
// import { BsFillArrowRightCircleFill } from 'react-icons/bs';
// import { BiUserCircle } from 'react-icons/bi';
import c from 'clsx';

import { Chip } from './Chip';

import type { TaskModel, ChipColor } from '@/types/index';

export interface MovableItemProps {
	item: TaskModel;
	color?: ChipColor;
}

export const MovableItem: FCC<MovableItemProps> = ({ item, color }) => {
	const [showOption, setShowOption] = useState(false);

	const selectChipColor = (str: string): string => {
		return str.includes('low') ? 'success' : str.includes('medium') ? 'warning' : 'danger';
	};

	return (
		<div
			className={c(
				'px-2 pb-2 pt-4 rounded-md flex gap-3 flex-col justify-center items-start',
				!color && 'bg-default-300/20',
				color === 'default' && 'bg-default-500/20',
				color === 'primary' && 'bg-primary-500/20',
				color === 'success' && 'bg-success-500/20',
			)}
		>
			<div className='inline-flex gap-2 justify-center items-center pl-1'>
				{/* <FaStickyNote className='text-default-400 text-lg' /> */}
				<h3>{item.title}</h3>
			</div>

			<div className='h-5'>
				{/* <Chip label={'Zeus'} size='xs' startContent={<BiUserCircle className='w-5 h-5 text-warning' />} /> */}
			</div>

			<div className='w-full inline-flex justify-start items-center hover:bg-default-300- rounded-lg px-1 py-2'>
				{/* <BsFillArrowRightCircleFill className='text-primary-500 text-md mr-2' /> */}

				<div className='w-full overflow-hidden'>
					<p className='normal-case truncate overflow-hidden underline underline-offset-2 decoration-default-300 hover:decoration-primary-300'>
						{item.description}
					</p>
				</div>
			</div>

			<div className='ml-1 relative'>
				<Chip
					label={item.priority!}
					color={selectChipColor(item.priority!) as ChipColor}
					size='xs'
					radius='sm'
					onClick={() => setShowOption((v) => !v)}
				/>

				{showOption && (
					<div className='absolute top-7 -left-2 z-30'>
						<div className='w-32 px-2 py-2 bg-default-50 rounded-md'>
							<div className='my-1 ml-2'>
								<span className='text-xs text-default-500'>Select an option</span>
							</div>
							<ul className='flex gap-1 flex-col items-start'>
								{['low', 'medium', 'high'].map((el) => (
									<li
										key={el}
										className='w-full hover:bg-default-100 rounded-sm px-2 py-0.5 transition-colors'
										onClick={() => setShowOption(false)}
									>
										<Chip label={el} color={selectChipColor(el) as ChipColor} size='xs' radius='sm' />
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
