import Typography from '@/shared/Typography/Typography';
import { memo } from 'react';
import cls from './Timer.module.scss';

interface TimerProps {
    time:string
}

export const Timer = memo(({ time }: TimerProps) => (

    <div className={cls.wrapper}>

        <Typography isPlayerText text={time} />
    </div>
));
