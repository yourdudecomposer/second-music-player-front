'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePlayerStore } from './PlayerStore';

export default function StoreInitializer() {
    const { setCurrentTrack, tracks: tracksClient } = usePlayerStore();
    const { get: getQuery } = useSearchParams();
    const trackId = getQuery('trackId');
    useEffect(() => {
        if (trackId) {
            if (+trackId > 0 && +trackId < tracksClient.length) {
                setCurrentTrack(+trackId);
            }
        }
    }, [setCurrentTrack, trackId, tracksClient.length]);

    return null;
}
