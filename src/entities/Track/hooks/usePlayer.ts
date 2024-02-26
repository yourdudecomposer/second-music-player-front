'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect } from 'react';

let musicPlayer: HTMLAudioElement | undefined;

export const usePlayer = () => {
    if (!musicPlayer) {
        musicPlayer = typeof Audio !== 'undefined' ? new Audio('') : undefined;
    }
    const { isPlaying, currentTrack } = usePlayerStore();
    useEffect(() => {
        if (musicPlayer) {
            musicPlayer.src = currentTrack?.audio || '';
        }
    }, [currentTrack]);

    useEffect(() => {
        if (musicPlayer) {
            if (isPlaying && currentTrack) {
                musicPlayer.play();
            } else {
                musicPlayer.pause();
            }
        }
    }, [isPlaying, currentTrack]);
    return musicPlayer;
};
