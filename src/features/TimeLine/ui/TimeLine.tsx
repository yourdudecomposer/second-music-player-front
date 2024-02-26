'use client';

import { Timer } from '@/shared/Timer';
import clsx from 'clsx';
import { StyledRange } from '@/shared/StyledRange';
import { usePlayer } from '@/entities/Track';
import {
    ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { usePlayerStore } from '@/store/PlayerStore';
import cls from './TimeLine.module.scss';

interface TimeLineProps {
    className?:string
}

export function TimeLine({ className }: TimeLineProps) {
    const player = usePlayer();
    const { isPlaying } = usePlayerStore();
    const [currentTime, setCurrentTime] = useState<string>(timeFormat(player?.currentTime || 0));

    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;
        if (isPlaying) {
            timerId = setInterval(() => setCurrentTime(timeFormat(player?.currentTime || 0)), 1000);
            return () => clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [player?.currentTime, isPlaying]);

    const totalTime = useMemo(() => (timeFormat(player?.duration || 0)), [player?.duration]);

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        if (player?.currentTime) {
            player.currentTime = +e.target.value;
        }
        console.log(e.target.value);
    };

    return (
        <div className={cls.wrapper}>
            <Timer time={currentTime} />
            {/* <div className={`${className} ${cls.out_line}`}>
                <div className={cls.inner_line} />
            </div> */}
            <StyledRange onInput={handleChange} maxValue={Math.floor(player?.duration || 0)} value={Math.floor(player?.currentTime || 0)} />
            <Timer time={totalTime} />

        </div>

    );
}
