'use client';

import { useRef } from 'react';
import { ITrack } from '@/types';
import { useTracksStore } from './tracksStore';

interface StoreInitializerProps {
    tracks:ITrack[]
}
export default function StoreInitializer({ tracks }:StoreInitializerProps) {
    const initialized = useRef(false);

    if (!initialized.current) {
        useTracksStore.setState({ tracks });
        initialized.current = true;
    }
    return null;
}
