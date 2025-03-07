import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import cls from './Bars.module.scss';

export function Bars() {
    const { isPlaying } = usePlayerStore();
    return (
        <div className={clsx(cls.icon, isPlaying && cls.animation)}>
            <span />
            <span />
            <span />
        </div>
    );
}
