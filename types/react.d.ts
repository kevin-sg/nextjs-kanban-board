import type { FC, PropsWithChildren } from 'react';

declare module 'react' {
	export type FCC<T = any> = FC<PropsWithChildren<T>>;
}
