import Typography from '@/shared/Typography/Typography';
import { memo } from 'react';
import cls from './Timer.module.scss';

interface TimerProps {
    time:string,
    className?:string
}

export const Timer = memo(({ time, className }: TimerProps) => (

    <div className={className}>

        <Typography className={cls.timer} isPlayerText text={time} />
    </div>
));
