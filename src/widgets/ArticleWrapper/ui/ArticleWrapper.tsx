'use client';

import { ArticleThemeSwitcher, useArticleTheme } from '@/features/ThemeSwitcher';
import { ReactNode } from 'react';
import cls from './ArticleWrapper.module.scss';

interface ArticleProps {
    children:ReactNode
}

// eslint-disable-next-line max-len

export function ArticleWrapper({ children }:ArticleProps) {
    const { theme } = useArticleTheme();
    return (
        <div className={`${cls.wrapper} ${theme}`}>
            {children}
            <ArticleThemeSwitcher />
        </div>
    );
}
