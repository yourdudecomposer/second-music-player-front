'use client';

import Typography from '@/shared/Typography/Typography';
import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/features/LanguageSwitcher';
import cls from './TypographyContent.module.scss';
import { TypographyContentLoader } from './TypographyContentLoader';

export function TypographyContent() {
    const { currentTrack } = usePlayerStore();
    const [isHydratingDone, setIsHydratingDone] = useState(false);
    const [title, setTitle] = useState('');
    const { language } = useLanguage();

    useEffect(() => {
        setIsHydratingDone(true);
    }, []);
    useEffect(() => {
        switch (language) {
        case 'en':
            setTitle(currentTrack?.title.en || '');
            break;
        case 'ru':
            setTitle(currentTrack?.title.ru || '');
            break;
        default:
            setTitle('');
            break;
        }
    }, [currentTrack?.title.en, currentTrack?.title.ru, language]);

    if (!isHydratingDone) {
        return <TypographyContentLoader />;
    }
    return (
        <div className={cls.wrapper}>
            <Typography isPlayerText className={cls.title} as="h2" text={title || ''} />
            <Typography isPlayerText className={cls.description} text={currentTrack?.description || ''} />
        </div>
    );
}
