// export async function GET(request: Request) {
//     const host = process.env.DB_HOST || '';
//     const res = await fetch(host, {
//         headers: {
//             'X-Parse-Application-Id': process.env.DB_ID || '',
//             'X-Parse-REST-API-Key': process.env.DB_API_KEY || '',
//         },
//     });
//     const data = await res.json();

import { ITrack } from '@/types';

export const mockData:ITrack[] = [
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
        title: 'title 8',
        description: 'description 8',
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
];

// const mockDataSmall:ITrack[] = [{
//     id: 1,
//     title: 'title 1',
//     description: 'description 1',
//     audio: '/mock_audio.mp3',
//     cover: '/cover_url_1.jpg',
//     isActive: true,
//     createdAt: '2023-10-23T16:16:15.846Z',
//     updatedAt: '2023-10-23T16:16:15.846Z',
// }];
export async function GET() {
    return Response.json(mockData);
}
