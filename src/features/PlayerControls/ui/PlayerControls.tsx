import { NextButton } from '../NextButton/NextButton';
import { PlayPauseButton } from '../PlayPauseButton/PlayPauseButton';
import { PrevButton } from '../PrevButton/PrevButton';
import { RepeatButton } from '../RepeatButton/RepeatButton';
import { ShuffleButton } from '../ShuffleButton/ShuffleButton';
import { TimeLine } from '../../TimeLine/ui/TimeLine';
import cls from './PlayerControls.module.scss';

interface PlayerControlsProps {
    className?:string
}

export function PlayerControls({ className }: PlayerControlsProps) {
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
