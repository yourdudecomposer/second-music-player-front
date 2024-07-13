import { ITrack } from '@/types';

const tracks:ITrack[] = [
    {
        id: 1,
        title: {
            en: 'Guitar and Orchestra,\nNo. 1',
            ru: 'Гитара и Оркестр,\nNo 1',
        },
        description: {
            en: 'A short piece with a climax towards the end of it. written in 2020',
            ru: 'Коротакая пьеса с кульминацией к концу. Написана в 2020',
        },
        audio: '/guitar_and_orchestra_1.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 2,
        title: {
            en: 'Guitar and Orchestra,\nNo. 2',
            ru: 'Гитара и Оркестр,\nNo 2',
        },
        description: {
            en: 'Guitar tuned to Drop C, lots of emotion and bells',
            ru: 'Гитара настроена в Drop C, много эмоций и колокола',
        },
        audio: '/guitar_and_orchestra_2.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 3,
        title: {
            en: 'Guitar, Duduk and Orchestra',
            ru: 'Гитар, Дудук\nи Оркестр',
        },
        description: {
            en: 'I really like the sound of the duduk. Made it a solo.',
            ru: 'Очень понравилось как звучит дудук. Сделал его солирующим',
        },
        audio: '/guitar_duduk_and_orchestra.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 4,
        title: {
            en: 'Guitar and Orchestra,\nNo. 3',
            ru: 'Гитара и Оркестр,\nNo 3',
        },
        description: {
            en: 'A simple piece to relieve attention',
            ru: 'Простая пьеса для того чтобы разрядить внимание',
        },
        audio: '/guitar_and_orchestra_3.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 5,
        title: {
            en: 'Guitar and Orchestra,\nNo. 4',
            ru: 'Гитара и Оркестр,\nNo 4',
        },
        description: {
            en: 'Free form of the piece with increasing and decreasing tension',
            ru: 'Свободная форма произведения с то нарастающим, то убывающим напряжением',
        },
        audio: '/guitar_and_orchestra_4.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },

];

export const filteredTracks = tracks.filter((el) => el.isActive);
