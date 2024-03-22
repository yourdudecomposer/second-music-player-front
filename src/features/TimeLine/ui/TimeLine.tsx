'use client';

import { Timer } from '@/shared/Timer';
import { StyledRange } from '@/shared/StyledRange';
import {
    ChangeEvent, useMemo,
} from 'react';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { useAudioContext } from '@/entities/PlayerRef';
import clsx from 'clsx';
import Typography from '@/shared/Typography/Typography';
import cls from './TimeLine.module.scss';
import { useRewind } from '../hooks/useRewind';
import { useBuffered } from '../hooks/useBuffered';
import { useCurrentTime } from '../hooks/useCurrentTime';

interface TimeLineProps {
    className?: string
}

export function TimeLine({ className }: TimeLineProps) {
    const player = useAudioContext();

    useRewind();
    const buffered = useBuffered();
    const currentTime = useCurrentTime();

    const totalTime = useMemo(() => (timeFormat(player?.duration || 0)), [player?.duration]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (player) {
            player.currentTime = +e.target.value;
        }
    };

    return (
        <>
            <div className={cls.mobile_timer}>

                <Timer time={currentTime} />
                <Typography isPlayerText text=" &nbsp;/&nbsp;" />
                <Timer time={totalTime} />

            </div>
            <div className={clsx(className, cls.wrapper)}>

                <Timer className={cls.tablet_timer} time={currentTime} />
                <StyledRange onInput={handleChange} maxValue={Math.floor(player?.duration || 0)} value={Math.floor(player?.currentTime || 0)} buffered={buffered} />
                <Timer className={cls.tablet_timer} time={totalTime} />

            </div>
        </>

    );
}
