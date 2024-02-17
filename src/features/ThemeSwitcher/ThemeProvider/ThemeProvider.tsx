'use client';

import {
    ReactNode, createContext, useCallback, useMemo, useState,
} from 'react';

type Theme = 'article_light' | 'article_dark'

// eslint-disable-next-line no-console
export const ThemeContext = createContext<{theme: Theme, toggleTheme:()=>void}>({ theme: 'article_light', toggleTheme: () => { } });

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
  }) {
    const [theme, setTheme] = useState<Theme>('article_dark');
    const toggleTheme = useCallback(() => {
        setTheme(theme === 'article_dark' ? 'article_light' : 'article_dark');
    }, [theme]);

    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
