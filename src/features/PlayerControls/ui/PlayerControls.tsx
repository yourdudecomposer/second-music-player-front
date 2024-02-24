'use client';

import { usePlayer } from '@/entities/Track';
import { NextButton } from '../NextButton/NextButton';
import { PlayPauseButton } from '../PlayPauseButton/PlayPauseButton';
import { PrevButton } from '../PrevButton/PrevButton';
import { RepeatButton } from '../RepeatButton/RepeatButton';
import { ShuffleButton } from '../ShuffleButton/ShuffleButton';
import cls from './PlayerControls.module.scss';

interface PlayerControlsProps {
    className?:string
}

export function PlayerControls({ className }: PlayerControlsProps) {
    usePlayer();

    return (
        <div className={`${className} ${cls.wrapper}`}>
            <ShuffleButton />
            <PrevButton />
            <PlayPauseButton />
            <NextButton />
            <RepeatButton />
        </div>
    );
}
