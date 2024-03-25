'use client';

import { ArticleThemeSwitcher, useArticleTheme } from '@/features/ThemeSwitcher';
import { ReactNode } from 'react';
import cls from './InnerLayout.module.scss';

interface InnerLayoutProps {
    children:ReactNode
}

// eslint-disable-next-line max-len

export function InnerLayout({ children }:InnerLayoutProps) {
    const { theme } = useArticleTheme();
    return (
        <div className={`${cls.wrapper} ${theme}`}>
            {children}
            <ArticleThemeSwitcher />
        </div>
    );
}
