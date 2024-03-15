'use client';

import { NoteButton } from '@/features/NoteButton';
import { ShowTrackListButton } from '@/features/ShowTrackListButton';
import { EQButton } from '@/features/EQButton';
import { VolumeButton } from '@/features/VolumeButton';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import cls from './PlayerFloatingMenu.module.scss';

interface PlayerFloatingMenuProps {
    className?:string
}

export function PlayerFloatingMenu({ className }: PlayerFloatingMenuProps) {
    const [isTrackListGoing, setIsTrackListGoing] = useState(true);
    const ref = useRef<HTMLDivElement>(null);
    const [placeholderHeight, setPlaceholderHeight] = useState(0);
    const { isTrackListVisible } = usePlayerStore();

    useEffect(() => {
        console.log(isTrackListVisible);
        if (isTrackListVisible) {
            setIsTrackListGoing(false);
        } else {
            setTimeout(() => {
                setIsTrackListGoing(true);
            }, 300);
        }
    }, [isTrackListVisible]);

    useEffect(() => {
        if (ref.current) {
            setPlaceholderHeight(ref.current.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <div ref={ref} className={clsx(className, cls.div, (isTrackListVisible || !isTrackListGoing) && cls.fixed)}>
                <ShowTrackListButton />
                <NoteButton />
                <EQButton />
                <VolumeButton />
            </div>
            <div
                style={{ height: placeholderHeight || '' }}
                className={clsx((isTrackListVisible || !isTrackListGoing) ? cls.placeholder_visible : cls.placeholder, cls.placeholder_none)}
            />
        </>
    );
}
