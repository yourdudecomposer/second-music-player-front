import { TrackList, TrackListSwipeWrapper } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import { TimeLine } from '@/features/TimeLine';
import { usePlayerStore } from '@/store/PlayerStore';
import StoreInitializer from '@/store/StoreInitializer';
import clsx from 'clsx';
import { AudioContextProvider } from '@/entities/PlayerRef';
import cls from './Player.module.scss';
import { TypographyContent } from './TypographyContent/TypographyContent';

export async function Player() {
    const tracks = [
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

    usePlayerStore.setState({ tracks }); // add tracks to server side store to get it on server components
    usePlayerStore.setState({ currentTrack: tracks[0] }); // add tracks to server side store to get it on server components

    return (
        <TrackListSwipeWrapper>
            <AudioContextProvider>

                <div className={clsx(cls.wrapper)}>
                    <StoreInitializer tracks={tracks} />
                    <div className={cls.player_top}>
                        <div className={cls.image_wrapper}>
                            <Image fill src="/cover_url_1.jpg" alt="" />
                        </div>
                        <TypographyContent />
                    </div>
                    <div className={cls.player_bottom}>
                        <TimeLine className={cls.timeline} />
                        <PlayerControls className={cls.controls} />
                        <PlayerFloatingMenu className={cls.float_menu} />
                    </div>

                    <TrackList />
                </div>
            </AudioContextProvider>
        </TrackListSwipeWrapper>

    );
}
