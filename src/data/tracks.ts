import { ITrack } from '@/types';

const tracks:ITrack[] = [
    {
        id: 1,
        title: {
            en: 'Zaychik',
            ru: 'Зайчик',
        },
        description: {
            en: 'Heroic music with guitar leading over an orchestral backdrop',
            ru: ' Смелая музыка, где солирует гитара на фоне оркестра',
        },
        audio: '/zaychik.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 2,
        title: {
            en: 'Maruska',
            ru: 'Маруська',
        },
        description: {
            en: 'A piece for guitar and orchestra with a sad ending',
            ru: 'Произведение для гитары и оркестра с грустным финалом',
        },
        audio: '/maruska.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 3,
        title: {
            en: 'Miroshka',
            ru: 'Мирошка',
        },
        description: {
            en: 'Guitar and strings move from stillness to a swell, with a voice at the end',
            ru: 'Гитара и струнные движутся от покоя к подъёму, с вокалом в конце',
        },
        audio: '/miroshka.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 4,
        title: {
            en: 'Laryuska',
            ru: 'Ларюська',
        },
        description: {
            en: 'Guitar and strings move from stillness to a swell, with a voice at the end',
            ru: 'Глубокая музыка для гитары в Drop D с оркестром с колоколом и кульминацией в конце',
        },
        audio: '/laryuska.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 5,
        title: {
            en: 'Baksik',
            ru: 'Баксик',
        },
        description: {
            en: 'Duduk, guitar, and strings lyrical part shifts to vivid rhythms with final peace',
            ru: 'Дудук, гитара и струнные лирическая часть сменяется яркими ритмами с финальным покоем',
        },
        audio: '/baksik.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 6,
        title: {
            en: 'Fiona',
            ru: 'Фиона',
        },
        description: {
            en: 'Heroic melody of guitar with orchestra in variations of one theme',
            ru: 'Героическая мелодия гитары с оркестром в вариациях одной темы',
        },
        audio: '/fiona.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 7,
        title: {
            en: 'Whiskas',
            ru: 'Вискас',
        },
        description: {
            en: 'Crisp rhythm with straight kick for guitar and orchestra at moderate pace',
            ru: 'Чёткий ритм с прямой бочкой для гитары и оркестра в среднем темпе',
        },
        audio: '/whiskas.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },
    {
        id: 8,
        title: {
            en: 'Dreams',
            ru: 'Сны',
        },
        description: {
            en: 'Voices weave a complex pattern, calling to one another',
            ru: 'Голоса сплетаются в сложный узор, перекликаясь друг с другом',
        },
        audio: '/dreams.mp3',
        cover: '/cover.jpg',
        isActive: true,
    },

];

export const filteredTracks = tracks.filter((el) => el.isActive);
