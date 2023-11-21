import './globals.css';
import { Roboto_Mono, Poppins } from 'next/font/google';
import c from 'clsx';

import { Providers } from './providers';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-poppins',
});

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
});

export const metadata = {
	title: 'Kanban Board',
	description:
		'It is a Kanban Board (visual-organization tool), created using React. Tasks can be added to the board, removed and moved between columns (each column has a limit of tasks). The data is stored in Local Storage.',
	keywords: 'next,react,kanban,tailwindcss',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={c(poppins.variable, roboto_mono.variable)}>
			<body className='bg-neutral-900'>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
