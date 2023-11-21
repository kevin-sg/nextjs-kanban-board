'use client';

import c from 'clsx';

import type { FCC, ReactNode } from 'react';
import type { ChipColor, ChipRadius, ChipSize, ChipVariant } from '@/types/components';

type ChipProps = {
	startContent?: ReactNode;
	endContent?: ReactNode;
	color?: ChipColor;
	variant?: ChipVariant;
	size?: ChipSize;
	radius?: ChipRadius;
	label: string;
	onClick?: () => void;
};

export const Chip: FCC<ChipProps> = (props) => {
	const { label, color, variant, size = 'md', radius = 'md', onClick } = props;

	return (
		<div
			className={c(
				'max-w-fit inline-flex justify-between items-center',
				radius === 'sm' && 'rounded-sm',
				radius === 'md' && 'rounded-md',
				radius === 'lg' && 'rounded-lg',
				radius === 'xl' && 'rounded-xl',
				size === 'xs' && 'h-5 text-xs px-0.5',
				size === 'sm' && 'h-6 text-sm px-1',
				size === 'md' && 'h-7 text-sm px-2',
				size === 'lg' && 'h-8 text-base px-2',
				size === 'xl' && 'h-9 text-lg px-2',
				!color && 'bg-none',
				color === 'default' && 'bg-default/50',
				color === 'primary' && 'bg-primary/50',
				color === 'warning' && 'bg-warning/50',
				color === 'success' && 'bg-success/50',
				color === 'danger' && 'bg-danger/50',
			)}
			onClick={onClick}
		>
			{variant === 'dot' && (
				<div
					className={c(
						'w-3 h-3 rounded-full',
						color ?? 'bg-default-500',
						color === 'default' && 'bg-default-500',
						color === 'primary' && 'bg-primary-500',
						color === 'warning' && 'bg-warning-500',
						color === 'success' && 'bg-success-500',
						color === 'danger' && 'bg-danger-500',
					)}
				/>
			)}

			{props.startContent && <>{props.startContent}</>}

			<span className='capitalize flex-1 font-light px-1 font-mono tracking-tighter'>
				{label.replaceAll(/\W|_/g, ' ')}
			</span>

			{props.endContent && <>{props.endContent}</>}
		</div>
	);
};
