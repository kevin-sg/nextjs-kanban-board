'use client';

import type { ClassValue } from 'clsx';

declare module 'clsx' {
	interface ExtendClassValue<T = string> extends ClassValue {}

	export function clsx<T>(...inputs: ExtendClassValue<T>[]): T;
	export default clsx;
}
