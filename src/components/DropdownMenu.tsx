'use client';

import { type FCC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import c from 'clsx';

type DropdownItem = {
	href: string;
	label: string;
	description?: string;
	// Icon?: IconType;
	classIcon?: string;
};

type DropdownMenuProps = {
	label: string;
	items: DropdownItem[];
};

export const DropdownMenu: FCC<DropdownMenuProps> = ({ label, items }) => {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			{({ open }) => (
				<>
					<div>
						<Menu.Button
							className={c(
								'inline-flex w-full justify-center rounded-2xl bg-inherit pl-4 pr-3 py-2 text-foreground text-sm font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
								open ? 'opacity-80' : 'hover:bg-default-200 hover:transition-opacity',
							)}
						>
							{label}
						</Menu.Button>
					</div>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-100'
						enterFrom='transform opacity-0 scale-95'
						enterTo='transform opacity-100 scale-100'
						leave='transition ease-in duration-75'
						leaveFrom='transform opacity-100 scale-100'
						leaveTo='transform opacity-0 scale-95'
					>
						<Menu.Items className='absolute mt-2 w-[22rem] -left-20 origin-top-right rounded-xl bg-default-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
							<div className='p-2'>
								{items.map((item) => (
									<Menu.Item key={item.href}>
										{({ active }) => (
											<div
												className={c(
													'group flex w-full items-center rounded-xl px-2 py-4 cursor-pointer',
													active && 'bg-default-200',
												)}
											>
												<div className='flex justify-center items-center gap-4'>
													<div>
														<h3 className='text-left font-normal text-base text-foreground capitalize'>{item.label}</h3>
														{item.description && (
															<p className='text-xs text-left text-default-500'>{item.description}</p>
														)}
													</div>
												</div>
											</div>
										)}
									</Menu.Item>
								))}
							</div>
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	);
};
