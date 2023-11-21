'use client';

import { ReactNode, useContext, createContext } from 'react';

let DarkModeContext = createContext({
	enabled: false,
});

export function DarkModeProvider({ enabled, children }: { enabled: boolean; children: ReactNode }) {
	// Read dark mode from context
	let useDarkMode = useContext(DarkModeContext);

	// When `enabled` prop is passed, prefer that one
	if (enabled === true || enabled === false) {
		useDarkMode.enabled = enabled;
	}

	return (
		<DarkModeContext.Provider value={useDarkMode}>
			<div className={useDarkMode ? 'dark' : ''}>{children}</div>
		</DarkModeContext.Provider>
	);
}
