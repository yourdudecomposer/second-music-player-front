'use client';

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { usePlayer } from './usePlayer';

type AudioRef = HTMLAudioElement | null

export const AudioContext = createContext<AudioRef>(null);

export function AudioContextProvider({
    children,
}: {
    children: ReactNode;
  }) {
    const audio = usePlayer();
    const [audioRef, setAudioRef] = useState<AudioRef>(null);
    useEffect(() => {
        setAudioRef(audio);
    }, [audio]);

    return (
        <AudioContext.Provider value={audioRef}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudioContext() {
    const audioRef = useContext(AudioContext);
    return audioRef;
}
