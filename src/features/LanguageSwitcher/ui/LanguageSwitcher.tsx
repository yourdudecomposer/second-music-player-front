'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import clsx from 'clsx';
import Typography from '@/shared/Typography/Typography';
import { Skeleton } from '@/shared/Skeleton';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import cls from './LanguageSwitcher.module.scss';
import { useLanguage } from '../LanguageProvider/LanguageProvider';

export function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();
    const isHydrationDone = useHydration();
    if (!isHydrationDone) {
        return (
            <Skeleton className={cls.skeleton} />
        );
    }
    return (

        <ControlButtonWrapper
            onClick={() => {
                toggleLanguage();
            }}
            className={clsx(cls.button, 'plain_text_size')}
        >
            {language === 'ru' ? <Typography text="RU" /> : <Typography text="EN" />}
        </ControlButtonWrapper>
    );
}
