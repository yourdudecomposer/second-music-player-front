'use client';

import Typography from '@/shared/Typography/Typography';
import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useState } from 'react';
import cls from './TypographyContent.module.scss';
import { TypographyContentLoader } from './TypographyContentLoader';

export function TypographyContent() {
    const { currentTrack } = usePlayerStore();
    const [isHydratingDone, setIsHydratingDone] = useState(false);

    useEffect(() => {
        setIsHydratingDone(true);
    }, []);

    if (!isHydratingDone) {
        return <TypographyContentLoader />;
    }
    return (
        <div className={cls.wrapper}>
            <Typography isPlayerText className={cls.title} as="h2" text={currentTrack?.title || ''} />
            <Typography isPlayerText className={cls.description} text={currentTrack?.description || ''} />
        </div>
    );
}
