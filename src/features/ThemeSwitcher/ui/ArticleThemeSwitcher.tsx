'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { ReactComponent as Sun } from '@/shared/icons/sun.svg';
import { ReactComponent as Moon } from '@/shared/icons/moon.svg';
import clsx from 'clsx';
import cls from './ArticleThemeSwitcher.module.scss';
import { useArticleTheme } from '../ThemeProviders/ArticleThemeProvider/ArticleThemeProvider';

export function ArticleThemeSwitcher() {
    const { toggleTheme, theme } = useArticleTheme();
    return (

        <ControlButtonWrapper
            onClick={() => {
                toggleTheme();
            }}
            className={clsx(cls.button, theme === 'article_light' && cls.smaller)}
        >
            {theme === 'article_dark' ? <Sun /> : <Moon />}
        </ControlButtonWrapper>
    );
}
