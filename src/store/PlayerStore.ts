import { ITrack } from '@/types';
import { useRef } from 'react';
import { create } from 'zustand';

interface TrackState {
  tracks: ITrack[];
  currentTrack: null | ITrack;
  setCurrentTrack: (id) => void;
  isTrackListVisible:boolean;
  setIsTrackListVisible:(bool:boolean)=>void;
  isPlaying:boolean;
  setIsPlaying:(bool:boolean)=>void;
  isShuffle:boolean;
  setIsShuffle:(bool:boolean)=>void;
  isRepeat:boolean;
  setIsRepeat:(bool:boolean)=>void;
  player:HTMLAudioElement | null
  setPlayer:(ref: HTMLAudioElement | null)=>void
}

export const usePlayerStore = create<TrackState>((set, get) => ({
    tracks: [],
    currentTrack: null,
    setCurrentTrack(id) {
        const currentTrack = get().tracks.find((t) => t.id === id);
        set({ currentTrack });
    },
    isTrackListVisible: false,
    setIsTrackListVisible(bool) {
        set({ isTrackListVisible: bool });
    },
    isPlaying: false,
    setIsPlaying(bool) {
        set({ isPlaying: bool });
    },
    isShuffle: false,
    setIsShuffle(bool) {
        set({ isShuffle: bool });
    },
    isRepeat: false,
    setIsRepeat(bool) {
        set({ isRepeat: bool });
    },
    player: null,
    setPlayer(ref) {
        set({ player: ref });
    },
}));
