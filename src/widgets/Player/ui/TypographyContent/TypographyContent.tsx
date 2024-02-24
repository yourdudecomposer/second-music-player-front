'use client';

import Typography from '@/shared/Typography/Typography';
import { usePlayerStore } from '@/store/PlayerStore';
import cls from './TypographyContent.module.scss';

interface TypographyContentProps {
    className?:string
}

export function TypographyContent({ className }: TypographyContentProps) {
    usePlayerStore(); // иначе стейт не будет обновляться на клиенте

    return (
        <>
            <Typography isPlayerText className={cls.title} as="h2" text={usePlayerStore.getState().currentTrack?.title || ''} />
            <Typography isPlayerText className={cls.description} text={usePlayerStore.getState().currentTrack?.description || ''} />
        </>
    );
}
