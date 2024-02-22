'use client';

import { ReactComponent as Pause } from '@/shared/icons/pause.svg';
import { ReactComponent as Play } from '@/shared/icons/play.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import cls from './PlayPauseButton.module.scss';

interface PlayPauseButtonProps {
    className?:string
}

export function PlayPauseButton({ className }: PlayPauseButtonProps) {
    console.log('play button render');

    const { isPlaying, setIsPlaying } = usePlayerStore();
    return (
        <ControlButtonWrapper onClick={() => setIsPlaying(!isPlaying)} className={cls.button}>
            {isPlaying ? <Pause /> : <Play />}
        </ControlButtonWrapper>
    );
}
