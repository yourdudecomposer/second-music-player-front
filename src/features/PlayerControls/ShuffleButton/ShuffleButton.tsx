import { Shuffle } from '@/shared/icons/Shuffle';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import { clsx } from 'clsx';
import cls from './ShuffleButton.module.scss';

export function ShuffleButton() {
    const { isShuffle, setIsShuffle } = usePlayerStore();

    const handleClick = () => setIsShuffle(!isShuffle);
    return (
        <ControlButtonWrapper onClick={handleClick} className={clsx(cls.shuffle, isShuffle && cls.active)}>
            <Shuffle />
        </ControlButtonWrapper>
    );
}
