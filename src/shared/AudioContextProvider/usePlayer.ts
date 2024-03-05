'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useRef } from 'react';

export const usePlayer = () => {
    const musicPlayerRef = useRef<HTMLAudioElement | null>(null);
    const { isPlaying, currentTrack } = usePlayerStore();

    useEffect(() => {
        if (!musicPlayerRef.current) {
            musicPlayerRef.current = new Audio('');
        }
    }, []);

    useEffect(() => {
        if (musicPlayerRef.current) {
            musicPlayerRef.current.src = currentTrack?.audio || '';
        }
    }, [currentTrack]);

    useEffect(() => {
        if (musicPlayerRef.current) {
            if (isPlaying && currentTrack) {
                musicPlayerRef.current.play();
            } else {
                musicPlayerRef.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);

    return musicPlayerRef.current;
};
