'use client';

import { Timer } from '@/shared/Timer';
import { StyledRange } from '@/shared/StyledRange';
import {
    ChangeEvent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { usePlayerStore } from '@/store/PlayerStore';
import { useAudioContext } from '@/entities/PlayerRef';
import clsx from 'clsx';
import cls from './TimeLine.module.scss';

interface TimeLineProps {
    className?: string
}

export function TimeLine({ className }: TimeLineProps) {
    const { isPlaying } = usePlayerStore();
    const player = useAudioContext();
    const [currentTime, setCurrentTime] = useState<string>(timeFormat(player?.currentTime || 0));
    const [buffered, setBuffered] = useState<number>(0);

    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;
        if (isPlaying) {
            timerId = setInterval(() => setCurrentTime(timeFormat(player?.currentTime || 0)), 1000);
            return () => clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [player?.currentTime, isPlaying]);
    useEffect(() => {
        if (player?.currentTime === 0) {
            setCurrentTime(timeFormat(player?.currentTime));
        }
    }, [player?.currentTime]);

    const onProgress = useCallback((e: any) => {
        // eslint-disable-next-line no-console
        console.log(e);

        if (player) {
            const { duration } = player;
            if (duration > 0) {
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < player.buffered.length; i++) {
                    if (
                        player.buffered.start(player.buffered.length - 1 - i)
      < player.currentTime
                    ) {
                        // eslint-disable-next-line no-console
                        setBuffered((player.buffered.end(player.buffered.length - 1 - i) * 100) / duration);

                        break;
                    }
                }
            }
        }
    }, [player]);
    useEffect(() => {
        player?.addEventListener('progress', onProgress);
        return () => { player?.removeEventListener('progress', onProgress); };
    }, [onProgress, player]);
    const totalTime = useMemo(() => (timeFormat(player?.duration || 0)), [player?.duration]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (player?.currentTime) {
            player.currentTime = +e.target.value;
        }
    };

    const arrowHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (player?.currentTime) {
                player.currentTime -= 5;
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (player?.currentTime) {
                player.currentTime += 5;
            }
        }
    }, [player]);

    useEffect(() => {
        window.addEventListener('keydown', arrowHandler);
        return () => { window.removeEventListener('keydown', arrowHandler); };
    }, [arrowHandler]);
    return (
        <div className={clsx(className, cls.wrapper)}>
            <Timer time={currentTime} />
            {/* <div className={`${className} ${cls.out_line}`}>
                <div className={cls.inner_line} />
            </div> */}
            <StyledRange onInput={handleChange} maxValue={Math.floor(player?.duration || 0)} value={Math.floor(player?.currentTime || 0)} buffered={buffered} />
            <Timer time={totalTime} />

        </div>

    );
}
