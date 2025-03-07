import { Loader } from '@/shared/Loader';
import cls from './TypographyContentLoader.module.scss';

export function TypographyContentLoader() {
    return (
        <div className={cls.wrapper}>
            <Loader />
        </div>
    );
}
