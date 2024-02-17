'use client';

import { ReactNode, useContext } from 'react';
import { ThemeContext, ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Article } from '@/widgets/Article';
import cls from './MainPage.module.scss';

export function MainPage({ children }: { children: ReactNode }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${cls.wrapper} ${theme} player_purple`}>
            {children}
            <Article />
            <ThemeSwitcher />
        </div>
    );
}
