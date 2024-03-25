import { Skeleton } from '@/shared/Skeleton';
import cls from './TypographyContentLoader.module.scss';

export function TypographyContentLoader() {
    return (
        <div className={cls.wrapper}>
            <Skeleton />
        </div>
    );
}
