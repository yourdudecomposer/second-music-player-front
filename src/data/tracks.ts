import { ITrack } from '@/types';

const tracks:ITrack[] = [
    {
        id: 1,
        title: {
            en: 'Guitar and Orchestra, No. 1',
            ru: 'Гитара и Оркестр No 1',
        },
        description: {
            en: 'written in 2020 when I was a music teacher',
            ru: 'написано в 2020 когда я был преподавателем музыки',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,
    },
    {
        id: 2,
        title: {
            en: 'Guitar and Orchestra, No. 2',
            ru: 'Гитара и Оркестр No 2',
        },
        description: {
            en: 'like the previous one, 2020',
            ru: 'как и предыдущее, 2020',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,
    },
    {
        id: 3,
        title: {
            en: 'Guitar, Duduk and Orchestra',
            ru: 'Гитар, Дудук  и Оркестр',
        },
        description: {
            en: 'I really like the sound of the duduk. Made it a solo.',
            ru: 'очень понравилось как звучит дудук. сделал его солирующим',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,
    },
    {
        id: 4,
        title: {
            en: 'Guitar and Orchestra, No. 3',
            ru: 'Гитара и Оркестр No 3',
        },
        description: {
            en: "It's written in 2024. I wanted to drive",
            ru: 'Написано в 2024. Захотелось драйва',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,
    },
    {
        id: 5,
        title: {
            en: 'Guitar and Orchestra, No. 4',
            ru: 'Гитара и Оркестр No 4',
        },
        description: {
            en: 'free form with increasing and decreasing tension',
            ru: 'свободная форма с то нарастающим, то убывающим напряжением',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover_url_1.jpg',
        isActive: true,
    },

];

export const filteredTracks = tracks.filter((el) => el.isActive);
