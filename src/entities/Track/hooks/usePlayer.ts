'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useRef } from 'react';

export const usePlayer = () => {
    const musicPlayers = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio('') : undefined);
    const { isPlaying, currentTrack } = usePlayerStore();

    useEffect(() => {
        if (musicPlayers.current) {
            musicPlayers.current.src = currentTrack?.audio || '';
        }
    }, [currentTrack]);

    useEffect(() => {
        if (musicPlayers.current) {
            if (isPlaying && currentTrack) {
                musicPlayers.current.play();
            } else {
                musicPlayers.current.pause();
            }
        }
    }, [isPlaying, currentTrack]);
};
