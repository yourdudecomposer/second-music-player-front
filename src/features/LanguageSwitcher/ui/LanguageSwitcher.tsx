'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import clsx from 'clsx';
import Typography from '@/shared/Typography/Typography';
import cls from './LanguageSwitcher.module.scss';
import { useLanguage } from '../LanguageProvider/LanguageProvider';

export function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();
    console.log(language);
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
