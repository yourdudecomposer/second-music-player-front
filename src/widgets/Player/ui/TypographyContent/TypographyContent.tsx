'use client';

import Typography from '@/shared/Typography/Typography';
import { usePlayerStore } from '@/store/PlayerStore';
import { useLanguage } from '@/features/LanguageSwitcher';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import cls from './TypographyContent.module.scss';
import { TypographyContentLoader } from './TypographyContentLoader';

export function TypographyContent() {
    const { currentTrack } = usePlayerStore();
    const { language } = useLanguage();

    const isHydratingDone = useHydration();

    if (!isHydratingDone) {
        return <TypographyContentLoader />;
    }
    return (
        <div className={cls.wrapper}>
            <Typography isPlayerText className={cls.title} as="h2" text={currentTrack?.title[language || 'en'] || ''} />
            <Typography isPlayerText className={cls.description} text={currentTrack?.description[language || 'en'] || ''} />
        </div>
    );
}
