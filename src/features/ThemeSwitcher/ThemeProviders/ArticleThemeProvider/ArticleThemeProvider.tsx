'use client';

import {
    ReactNode, createContext, useCallback, useContext, useMemo, useState,
} from 'react';

type Theme = 'article_light' | 'article_dark'

// eslint-disable-next-line
export const ThemeContext = createContext<{theme: Theme, toggleTheme:()=>void}>({ theme: 'article_light', toggleTheme: () => { } });

export function ArticleThemeProvider({
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

export function useArticleTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return { theme, toggleTheme };
}
