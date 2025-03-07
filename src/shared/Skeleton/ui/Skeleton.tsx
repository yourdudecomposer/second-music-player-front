import clsx from 'clsx';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?:string
}

export function Skeleton({ className }: SkeletonProps) {
    return (

        <div className={clsx(cls.skeleton, className)} />
    );
}
