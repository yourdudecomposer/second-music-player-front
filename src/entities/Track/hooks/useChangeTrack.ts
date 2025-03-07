'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { useMemo } from 'react';

export const useChangeTrack = () => {
    const {
        currentTrack, tracks, setCurrentTrack, isShuffle, repeat,
    } = usePlayerStore();

    const indexOfCurrentTrack = useMemo(() => tracks.findIndex((el) => {
        if (el.id === currentTrack?.id) {
            return true;
        }
        return false;
    }), [currentTrack?.id, tracks]);

    function changeTrack(direction:'prev'|'next'):void {
        if (isShuffle) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * tracks.length);
            } while (randomIndex === indexOfCurrentTrack);
            setCurrentTrack(tracks[randomIndex].id);
        } else if (direction === 'prev') {
            if (indexOfCurrentTrack === 0) return;
            setCurrentTrack(tracks[indexOfCurrentTrack - 1].id);
        } else if (direction === 'next') {
            if (indexOfCurrentTrack < tracks.length - 1) { // if current track NOT last
                setCurrentTrack(tracks[indexOfCurrentTrack + 1].id);
            } else if (repeat === 'all') {
                setCurrentTrack(tracks[0].id);
            }
        }
    }
    return changeTrack;
};
