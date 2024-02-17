'use client';

import { useContext } from 'react';
import cls from './ThemeSwitcher.module.scss';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

export function ThemeSwitcher() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <button
            type="button"
            onClick={() => {
                toggleTheme();
            }}
            className={`${cls.div}`}
        >
            i am theme switcher
        </button>
    );
}
