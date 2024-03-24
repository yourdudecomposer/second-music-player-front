'use client';

import { Timer } from '@/shared/Timer';
import { StyledRange } from '@/shared/StyledRange';
import {
    ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { useAudioContext } from '@/entities/PlayerRef';
import clsx from 'clsx';
import Typography from '@/shared/Typography/Typography';
import cls from './TimeLine.module.scss';
import { useRewind } from '../hooks/useRewind';
import { useBuffered } from '../hooks/useBuffered';
import { useCurrentTime } from '../hooks/useCurrentTimerTime';

interface TimeLineProps {
    className?: string
}

export function TimeLine({ className }: TimeLineProps) {
    const player = useAudioContext();
    const [value, setValue] = useState(0);
    useRewind();
    const buffered = useBuffered();
    const { currentTimerTime, setCurrentTimerTime } = useCurrentTime();

    const totalTime = useMemo(() => (timeFormat(player?.duration || 0)), [player?.duration]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (player) {
            setValue(+e.target.value);
        }
    };
    useEffect(() => {
        if (player) {
            player.currentTime = value;
            setCurrentTimerTime(timeFormat(value));
        }
    }, [player, setCurrentTimerTime, value]);
    return (
        <>
            <div className={cls.mobile_timer}>

                <Timer time={currentTimerTime} />
                <Typography isPlayerText text=" &nbsp;/&nbsp;" />
                <Timer time={totalTime} />

            </div>
            <div className={clsx(className, cls.wrapper)}>

                <Timer className={cls.tablet_timer} time={currentTimerTime} />
                <StyledRange onInput={handleChange} maxValue={Math.floor(player?.duration || 0)} value={value} buffered={buffered} />
                <Timer className={cls.tablet_timer} time={currentTimerTime} />

            </div>
        </>

    );
}
