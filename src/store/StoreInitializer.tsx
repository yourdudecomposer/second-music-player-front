'use client';

import { useEffect, useRef } from 'react';
import { ITrack } from '@/types';
import { useSearchParams } from 'next/navigation';
import { usePlayerStore } from './PlayerStore';

interface StoreInitializerProps {
    tracks:ITrack[]
}
export default function StoreInitializer({ tracks }:StoreInitializerProps) {
    const initialized = useRef(false);
    const { setCurrentTrack, tracks: tracksClient } = usePlayerStore();
    const { get: getQuery } = useSearchParams();
    const trackId = getQuery('trackId') || 1;
    useEffect(() => {
        if (+trackId > 0 && +trackId < tracksClient.length) {
            setCurrentTrack(+trackId);
        } else {
            setCurrentTrack(1);
        }
    }, [setCurrentTrack, trackId, tracksClient.length]);
    if (!initialized.current) {
        usePlayerStore.setState({ tracks }); // add tracks to client side store
        initialized.current = true;
    }
    return null;
}
