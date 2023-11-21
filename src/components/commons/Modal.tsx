import { FCC, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type ModalProps = {
	isOpen?: boolean;
	onClose: (arg: boolean) => void;
};

export const Modal: FCC<ModalProps> = ({ isOpen = false, onClose, children }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as='div' className='relative z-10' onClose={() => onClose(false)}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-transparent bg-opacity-25 backdrop-blur-sm' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-sm transform overflow-hidden rounded-3xl bg-neutral-800 p-4 text-left align-middle shadow-xl transition-all'>
								<Dialog.Title as='h2' className='text-2xl font-medium leading-6 text-gray-200 text-center'>
									Create Task
								</Dialog.Title>

								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
