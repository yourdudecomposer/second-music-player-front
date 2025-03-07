'use client';

import { imageBlurData } from '@/data/image';
import Image from 'next/image';
import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useState } from 'react';
import cls from './ImageContent.module.scss';

export function ImageContent() {
    const { currentTrack } = usePlayerStore();

    const [source, setSource] = useState<any>(imageBlurData);

    useEffect(() => {
        if (currentTrack) {
            setSource(currentTrack.cover);
        }
    }, [currentTrack]);
    return (
        <div className={cls.image_wrapper}>
            {/* eslint-disable-next-line max-len */}
            <Image onError={() => setSource(imageBlurData)} placeholder="blur" blurDataURL={imageBlurData} fill src={source} alt="" />
        </div>
    );
}
