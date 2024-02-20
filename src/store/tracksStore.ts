import { ITrack } from '@/types';
import { create } from 'zustand';

interface TrackState {
  tracks: ITrack[];
  currentTrack: null | ITrack;
  setCurrentTrack: (id) => void;
}

export const useTracksStore = create<TrackState>((set, get) => ({
    tracks: [],
    currentTrack: null,
    setCurrentTrack(id) {
        const currentTrack = get().tracks.find((t) => t.id === id);
        set({ currentTrack });
    },
}));
