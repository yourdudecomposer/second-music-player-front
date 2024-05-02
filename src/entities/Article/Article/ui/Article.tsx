'use client';

/* eslint-disable max-len */
import Typography from '@/shared/Typography/Typography';
import clsx from 'clsx';
import { useLanguage } from '@/features/LanguageSwitcher';
import { Skeleton } from '@/shared/Skeleton';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import { article } from '@/data/article';
import cls from './Article.module.scss';

interface ArticleProps {
    className?:string
}

export function Article({ className }: ArticleProps) {
    const { language } = useLanguage();

    const isHydrationDone = useHydration();
    if (!isHydrationDone) {
        return (
            <div className={cls.skeleton_container}>
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
            </div>
        );
    }
    return (
        <div className={className}>

            <Typography className={cls.title} text="Welcome" />
            <div className={clsx(cls.text, 'plain_text_size')}>
                <Typography text={language ? article[language].parOne : ''} />
                <Typography text={language ? article[language].parTwo : ''} />
                <Typography text={language ? article[language].parThree : ''} />
            </div>
        </div>
    );
}
