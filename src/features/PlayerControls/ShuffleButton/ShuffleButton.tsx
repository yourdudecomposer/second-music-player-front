import { Shuffle } from '@/shared/icons/Shuffle';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import { clsx } from 'clsx';
import { useCallback } from 'react';
import cls from './ShuffleButton.module.scss';

interface ShuffleButtonProps {
    className?:string
}

export function ShuffleButton({ className }: ShuffleButtonProps) {
    const { isShuffle, setIsShuffle } = usePlayerStore();

    const handleClick = () => setIsShuffle(!isShuffle);
    return (
        <ControlButtonWrapper onClick={handleClick} className={clsx(cls.shuffle, isShuffle && cls.active)}>
            <Shuffle />
        </ControlButtonWrapper>
    );
}
