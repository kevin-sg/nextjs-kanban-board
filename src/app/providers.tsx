'use client';

import { Navbar } from '@/components';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			<div className='max-w-7xl mx-auto py-4 px-6'>{children}</div>
		</div>
	);
}
