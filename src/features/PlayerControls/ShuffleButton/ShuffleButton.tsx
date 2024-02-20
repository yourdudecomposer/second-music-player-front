'use client';

import { Shuffle } from '@/shared/icons/Shuffle';
import { ThemeContext } from '@/features/ThemeSwitcher';
import { useContext, useEffect, useState } from 'react';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './ShuffleButton.module.scss';

interface ShuffleButtonProps {
    className?:string
}

export function ShuffleButton({ className }: ShuffleButtonProps) {
    return (
        <ControlButtonWrapper className={cls.shuffle}>
            <Shuffle />
        </ControlButtonWrapper>
    );
}
