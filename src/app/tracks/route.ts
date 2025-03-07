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

const mockData:ITrack[] = [];

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
