'use client';

import { usePlayerStore } from '@/store/PlayerStore';

export const useChangeTrack = () => {
    const { currentTrack, tracks, setCurrentTrack } = usePlayerStore();
    const indexOfCurrentTrack = tracks.findIndex((el) => {
        if (el.id === currentTrack?.id) {
            return true;
        }
        return false;
    });
    function changeTrack(direction:'prev'|'next'):void {
        if (direction === 'prev') {
            if (indexOfCurrentTrack === 0) return;
            setCurrentTrack(tracks[indexOfCurrentTrack - 1].id);
        } else {
            if (indexOfCurrentTrack === tracks.length - 1) return;
            setCurrentTrack(tracks[indexOfCurrentTrack + 1].id);
        }
    }
    return changeTrack;
};
