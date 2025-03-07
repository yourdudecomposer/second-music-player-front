'use client';

import { usePlayerStore } from '@/store/PlayerStore';

export const useRandomTrackIndex = () => {
    const { tracks } = usePlayerStore();
    return Math.floor(Math.random() * tracks.length);
};
