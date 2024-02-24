import { Timer } from '@/shared/Timer';
import clsx from 'clsx';
import { StyledRange } from '@/shared/StyledRange';
import cls from './TimeLine.module.scss';

interface TimeLineProps {
    className?:string
}

export function TimeLine({ className }: TimeLineProps) {
    return (
        <div className={cls.wrapper}>
            <Timer time="12:33" />
            {/* <div className={`${className} ${cls.out_line}`}>
                <div className={cls.inner_line} />
            </div> */}
            <StyledRange />
            <Timer time="12:44" />

        </div>

    );
}
