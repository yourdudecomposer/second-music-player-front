'use client';

import { useRef } from 'react';
import { ITrack } from '@/types';
import { usePlayerStore } from './PlayerStore';

interface StoreInitializerProps {
    tracks:ITrack[]
}
export default function StoreInitializer({ tracks }:StoreInitializerProps) {
    const initialized = useRef(false);

    if (!initialized.current) {
        usePlayerStore.setState({ tracks }); // add tracks to client side store
        usePlayerStore.setState({ currentTrack: tracks[0] }); // add current tracks to server side store
        initialized.current = true;
    }
    return null;
}
