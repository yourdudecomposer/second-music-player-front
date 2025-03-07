/* eslint-disable no-unused-vars */
import { ITrack, RepeatType } from '@/types';
import { create } from 'zustand';

interface TrackState {
  tracks: ITrack[];
  currentTrack: null | ITrack;
  setCurrentTrack: (id:number) => void;
  isTrackListVisible:boolean;
  setIsTrackListVisible:(bool:boolean)=>void;
  isPlaying:boolean;
  setIsPlaying:(bool:boolean)=>void;
  isShuffle:boolean;
  setIsShuffle:(bool:boolean)=>void;
  repeat:RepeatType;
  setRepeat:(val:RepeatType)=>void;
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
    repeat: 'none',
    setRepeat(val) {
        set({ repeat: val });
    },
    player: null,
    setPlayer(ref) {
        set({ player: ref });
    },
}));
