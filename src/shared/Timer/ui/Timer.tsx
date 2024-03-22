import Typography from '@/shared/Typography/Typography';
import { memo } from 'react';

interface TimerProps {
    time:string,
    className?:string
}

export const Timer = memo(({ time, className }: TimerProps) => (

    <div className={className}>

        <Typography isPlayerText text={time} />
    </div>
));
