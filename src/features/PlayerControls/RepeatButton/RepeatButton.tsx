import { ReactComponent as Repeat } from '@/shared/icons/repeat.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import cls from './RepeatButton.module.scss';

interface RepeatButtonProps {
    className?:string
}

export function RepeatButton({ className }: RepeatButtonProps) {
    const { isRepeat, setIsRepeat } = usePlayerStore();

    const handleClick = () => setIsRepeat(!isRepeat);
    return (
        <ControlButtonWrapper onClick={handleClick} className={clsx(cls.button, isRepeat && cls.active)}>
            <Repeat />
        </ControlButtonWrapper>
    );
}
