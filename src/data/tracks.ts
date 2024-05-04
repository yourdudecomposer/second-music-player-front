import { ITrack } from '@/types';

const tracks:ITrack[] = [
    {
        id: 1,
        title: {
            en: 'Title 1',
            ru: 'Название 1',
        },
        description: {
            en: 'Description 1',
            ru: 'Описание 1',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: false,
    },
    {
        id: 2,
        title: {
            en: 'Title 2',
            ru: 'Название 2',
        },
        description: {
            en: 'Description 2',
            ru: 'Описание 2',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: false,
    },
    {
        id: 3,
        title: {
            en: 'Title 3',
            ru: 'Название 3',
        },
        description: {
            en: 'Description 3',
            ru: 'Описание 3',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 4,
        title: {
            en: 'Title 4',
            ru: 'Название 4',
        },
        description: {
            en: 'Description 4',
            ru: 'Описание 4',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 5,
        title: {
            en: 'Title 5',
            ru: 'Название 5',
        },
        description: {
            en: 'Description 5',
            ru: 'Описание 5',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 6,
        title: {
            en: 'Title 6',
            ru: 'Название 6',
        },
        description: {
            en: 'Description 6',
            ru: 'Описание 6',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 7,
        title: {
            en: 'Title 7',
            ru: 'Название 7',
        },
        description: {
            en: 'Description 7',
            ru: 'Описание 7',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 8,
        title: {
            en: 'Title 8',
            ru: 'Название 8',
        },
        // eslint-disable-next-line max-len
        description: {
            en: 'Description 8',
            ru: 'Описание 8',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 9,
        title: {
            en: 'Title 9',
            ru: 'Название 9',
        },
        description: {
            en: 'Description 9',
            ru: 'Описание 9',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 10,
        title: {
            en: 'Title 10',
            ru: 'Название 10',
        },
        description: {
            en: 'Description 10',
            ru: 'Описание 10',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 11,
        title: {
            en: 'Title 11',
            ru: 'Название 11',
        },
        description: {
            en: 'Description 11',
            ru: 'Описание 11',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
    {
        id: 12,
        title: {
            en: 'Title 12',
            ru: 'Название 12',
        },
        description: {
            en: 'Description 12',
            ru: 'Описание 12',
        },
        audio: '/mock_audio.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,

    },
];

export const filteredTracks = tracks.filter((el) => el.isActive);
