import { ReactComponent as Pause } from '@/shared/icons/pause.svg';
import { ReactComponent as Play } from '@/shared/icons/play.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import { useTrack } from '@/entities/Track';
import cls from './PlayPauseButton.module.scss';

interface PlayPauseButtonProps {
    className?:string
}

export function PlayPauseButton({ className }: PlayPauseButtonProps) {
    const { isPlaying, setIsPlaying } = usePlayerStore();

    const play = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };
    return (
        <ControlButtonWrapper onClick={play} className={cls.button}>
            {isPlaying ? <Pause /> : <Play />}
        </ControlButtonWrapper>
    );
}
