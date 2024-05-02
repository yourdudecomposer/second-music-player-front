'use client';

import { clsx } from 'clsx';
import { ShowTrackListButton } from '@/features/ShowTrackListButton';
import { CopyButton } from '@/features/CopyButton';
import { VolumeButton } from '@/features/VolumeButton';
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
    return (
        <div className={clsx(className, cls.wrapper)}>
            <div className={clsx(cls.left_wrapper)}>
                <ShowTrackListButton className={cls.tracklist_btn} />
            </div>
            <div className={clsx(cls.center_wrapper)}>
                <ShuffleButton />
                <PrevButton />
                <PlayPauseButton />
                <NextButton />
                <RepeatButton />
            </div>
            <div className={clsx(cls.right_wrapper)}>
                <CopyButton className={cls.eq_btn} />
                <VolumeButton />
            </div>
        </div>
    );
}
