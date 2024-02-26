import Typography from '@/shared/Typography/Typography';
import cls from './Timer.module.scss';

interface TimerProps {
    time:string
    className?:string
}

export function Timer({ time, className }: TimerProps) {
    return (

        <div className={cls.wrapper}>

            <Typography isPlayerText text={time} />
        </div>
    );
}
