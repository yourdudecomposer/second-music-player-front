import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { useChangeTrack } from '@/entities/Track';
import { useAudioContext } from '@/entities/PlayerRef';
import { useEffect, useRef, useState } from 'react';
import cls from './PrevButton.module.scss';

export function PrevButton() {
    const changeTrack = useChangeTrack();
    const player = useAudioContext();
    const [isTimerRun, setIsTimerRun] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const click = () => {
        if (player?.currentTime) {
            player.currentTime = 0;
            if (isTimerRun) {
                changeTrack('prev');
            } else {
                timer.current = setTimeout(() => {
                    setIsTimerRun(false);
                }, 2000);
                setIsTimerRun(true);
            }
        } else {
            changeTrack('prev');
        }
    };

    useEffect(() => () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }, []);
    return (
        <ControlButtonWrapper onClick={click} className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
