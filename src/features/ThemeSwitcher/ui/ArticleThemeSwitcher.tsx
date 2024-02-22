'use client';

import cls from './ArticleThemeSwitcher.module.scss';
import { useArticleTheme } from '../ThemeProviders/ArticleThemeProvider/ArticleThemeProvider';

export function ArticleThemeSwitcher() {
    const { toggleTheme } = useArticleTheme();
    return (
        <button
            type="button"
            onClick={() => {
                toggleTheme();
            }}
            className={`${cls.div}`}
        >
            i am article theme switcher
        </button>
    );
}
