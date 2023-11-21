'use client';

import { Modal, TaskLayout } from '@/components';
import { ChangeEventHandler, FC, useState } from 'react';

const HomePage: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState({ title: '', description: '' });

	const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({ target }) => {
		setFormState((prev) => ({ ...prev, [target.name]: target.value }));
	};

	return (
		<div className='w-full flex flex-col justify-center items-center gap-10'>
			<h1>Kanban Board</h1>

			<button
				type='button'
				name='Create Task'
				className='block py-2.5 px-3.5 bg-neutral-600 hover:bg-neutral-700 rounded-lg text-white'
				onClick={() => setIsOpen((prev) => !prev)}
			>
				Create Task
			</button>

			<TaskLayout />

			<Modal isOpen={isOpen} onClose={(closeModal) => setIsOpen(closeModal)}>
				<div className='mt-4 flex flex-col gap-4'>
					<div className='flex flex-col'>
						<label htmlFor='title' className='text-white mb-1 text-sm'>
							Title
						</label>
						<input
							type='text'
							name='title'
							id='title'
							className='py-2.5 px-3.5 border-0 outline-none text-white rounded-lg bg-neutral-700 text-sm'
							onChange={handleChange}
						/>
					</div>

					<div className='flex flex-col'>
						<h4 className='text-white mb-1'>Description</h4>
						<textarea
							className='py-2.5 px-3.5 resize-none border-0 outline-none text-white rounded-lg bg-neutral-700 text-sm'
							name='description'
							id='description'
							rows={5}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='mt-4 flex justify-between items-center'>
					<button
						type='button'
						className='inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
						onClick={() => setIsOpen(false)}
						name='Create'
					>
						Create
					</button>
					<button
						type='button'
						className='inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
						onClick={() => setIsOpen(false)}
						name='Cancel'
					>
						Cancel
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default HomePage;
