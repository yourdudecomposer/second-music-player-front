'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import {
    useCallback, useEffect, useMemo, useRef,
} from 'react';

export const usePlayer = () => {
    const musicPlayerRef = useRef<HTMLAudioElement | null>(null);
    const {
        isPlaying, currentTrack, repeat, setCurrentTrack, tracks,
    } = usePlayerStore();
    const indexOfCurrentTrack = useMemo(() => tracks.findIndex((el) => {
        if (el.id === currentTrack?.id) {
            return true;
        }
        return false;
    }), [currentTrack?.id, tracks]);
    const trackEndHandler = useCallback(() => {
        if (repeat === 'one') {
            musicPlayerRef.current?.play();
        } else if (indexOfCurrentTrack < tracks.length - 1) { // if current track NOT last
            setCurrentTrack(tracks[indexOfCurrentTrack + 1].id);
        } else if (repeat === 'all') {
            setCurrentTrack(tracks[0].id);
        }
    }, [indexOfCurrentTrack, repeat, setCurrentTrack, tracks]);

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
