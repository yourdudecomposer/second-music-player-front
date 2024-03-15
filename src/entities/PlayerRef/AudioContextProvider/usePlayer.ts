'use client';

import { useChangeTrack } from '@/entities/Track';
import { usePlayerStore } from '@/store/PlayerStore';
import { useCallback, useEffect, useRef } from 'react';

export const usePlayer = () => {
    const musicPlayerRef = useRef<HTMLAudioElement | null>(null);
    const {
        isPlaying, currentTrack, repeat,
    } = usePlayerStore();
    const changeTrack = useChangeTrack();
    const trackEndHandler = useCallback(() => {
        if (repeat === 'one') {
            musicPlayerRef.current?.play();
        } else {
            changeTrack('next');
        }
    }, [changeTrack, repeat]);

    useEffect(() => {
        if (!musicPlayerRef.current) {
            musicPlayerRef.current = new Audio('');
        }
    }, []);

    useEffect(() => {
        musicPlayerRef.current?.addEventListener('ended', trackEndHandler);
        return () => { musicPlayerRef.current?.removeEventListener('ended', trackEndHandler); };
    }, [trackEndHandler]);

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
    console.dir(musicPlayerRef.current);
    return musicPlayerRef.current;
};
