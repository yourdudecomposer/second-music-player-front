'use client';

import { ReactComponent as List } from '@/shared/icons/list.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import cls from './ShowTrackListButton.module.scss';

interface ShowTrackListButtonProps {
    className?:string
}

export function ShowTrackListButton({ className }: ShowTrackListButtonProps) {
    const { setIsTrackListVisible, isTrackListVisible } = usePlayerStore();

    return (
        <ControlButtonWrapper onClick={() => setIsTrackListVisible(true)} className={clsx(cls.button, isTrackListVisible && cls.active)}>
            <List />
        </ControlButtonWrapper>
    );
}
