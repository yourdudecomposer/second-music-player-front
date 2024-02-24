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
            setCurrentTrack(tracks[indexOfCurrentTrack - 1].id);
        } else {
            setCurrentTrack(tracks[indexOfCurrentTrack + 1].id);
        }
    }
    return changeTrack;
};
