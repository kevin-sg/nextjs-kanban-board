'use client';

import type { FC } from 'react';

export const Navbar: FC = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<header className='w-full px-6'>
				<nav className='py-4 flex justify-between items-center'>
					<div className='flex gap-2 justify-between items-center'>
						<span className='font-bold text-foreground'>NEXT13</span>
					</div>
				</nav>
			</header>
		</div>
	);
};
