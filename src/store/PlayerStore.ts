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
    tracks: [
        {
            id: 1,
            title: 'title 1',
            description: 'description 1',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
        },
        {
            id: 2,
            title: 'title 2',
            description: 'description 2',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-11-23T16:16:15.846Z',
            updatedAt: '2023-11-23T16:16:15.846Z',
        },
        {
            id: 3,
            title: 'title 3',
            description: 'description 3',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
        },
        {
            id: 4,
            title: 'title 4',
            description: 'description 4',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
        },
        {
            id: 5,
            title: 'title 5',
            description: 'description 5',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-22T16:16:15.846Z',
            updatedAt: '2023-10-22T16:16:15.846Z',
        },
        {
            id: 6,
            title: 'title 6',
            description: 'description 6',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-13T16:16:15.846Z',
            updatedAt: '2023-10-13T16:16:15.846Z',
        },
        {
            id: 7,
            title: 'title 7',
            description: 'description 7',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T15:16:15.846Z',
            updatedAt: '2023-10-23T15:16:15.846Z',
        },
        {
            id: 8,
            title: 'title 8 asdf asdf wedf sdva sdv sdfasdf asdfasfd asdfsfd wfdas asdfasdf asdfasdf sadfsadf asdf',
            // eslint-disable-next-line max-len
            description: 'description 8 asdf asdf wedf sdva sdv sdfasdf asdfasfd asdfsfd wfdas asdfasdf asdfasdf sadfsadf asdf asdf asdf wedf sdva sdv sdfasdf asdfasfd asdfsfd wfdas asdfasdf asdfasdf sadfsadf asdf ',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:15:15.846Z',
            updatedAt: '2023-10-23T16:15:15.846Z',
        },
        {
            id: 9,
            title: 'title 9',
            description: 'description 9',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:17:15.846Z',
            updatedAt: '2023-10-23T16:17:15.846Z',
        },
        {
            id: 10,
            title: 'title 10',
            description: 'description 10',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-29T16:16:15.846Z',
            updatedAt: '2023-10-29T16:16:15.846Z',
        },
        {
            id: 11,
            title: 'title 11',
            description: 'description 11',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-12-23T16:16:15.846Z',
            updatedAt: '2023-12-23T16:16:15.846Z',
        },
        {
            id: 12,
            title: 'title 12',
            description: 'description 12',
            audio: '/mock_audio.mp3',
            cover: '/cover_url_1.jpg',
            isActive: true,
            createdAt: '2023-10-23T16:16:17.846Z',
            updatedAt: '2023-10-23T16:16:17.846Z',
        },
    ],
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
