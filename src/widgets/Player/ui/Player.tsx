import { TrackList, TrackListSwipeWrapper } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import { TimeLine } from '@/features/TimeLine';
import StoreInitializer from '@/store/StoreInitializer';
import clsx from 'clsx';
import { AudioContextProvider } from '@/entities/PlayerRef';
import { SearchParamsChanger } from '@/features/SearchParamsChanger';
import { Suspense } from 'react';
import cls from './Player.module.scss';
import { TypographyContent } from './TypographyContent/TypographyContent';

export async function Player() {
    const tracks = [
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
            isActive: true,
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
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
            isActive: true,
            createdAt: '2023-11-23T16:16:15.846Z',
            updatedAt: '2023-11-23T16:16:15.846Z',
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
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
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
            createdAt: '2023-10-23T16:16:15.846Z',
            updatedAt: '2023-10-23T16:16:15.846Z',
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
            createdAt: '2023-10-22T16:16:15.846Z',
            updatedAt: '2023-10-22T16:16:15.846Z',
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
            createdAt: '2023-10-13T16:16:15.846Z',
            updatedAt: '2023-10-13T16:16:15.846Z',
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
            createdAt: '2023-10-23T15:16:15.846Z',
            updatedAt: '2023-10-23T15:16:15.846Z',
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
            createdAt: '2023-10-23T16:15:15.846Z',
            updatedAt: '2023-10-23T16:15:15.846Z',
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
            createdAt: '2023-10-23T16:17:15.846Z',
            updatedAt: '2023-10-23T16:17:15.846Z',
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
            createdAt: '2023-10-29T16:16:15.846Z',
            updatedAt: '2023-10-29T16:16:15.846Z',
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
            createdAt: '2023-12-23T16:16:15.846Z',
            updatedAt: '2023-12-23T16:16:15.846Z',
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
            createdAt: '2023-10-23T16:16:17.846Z',
            updatedAt: '2023-10-23T16:16:17.846Z',
        },
    ];

    return (
        <TrackListSwipeWrapper>
            <AudioContextProvider>
                <div className={clsx(cls.wrapper)}>
                    <Suspense>

                        <SearchParamsChanger />
                    </Suspense>
                    <StoreInitializer tracks={tracks} />

                    <div className={cls.player_top}>
                        <div className={cls.image_wrapper}>
                            {/* eslint-disable-next-line max-len */}
                            <Image placeholder="blur" blurDataURL="data:image/webp;base64,UklGRvwEAABXRUJQVlA4WAoAAAAgAAAAZQIAgAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggDgMAAFBBAJ0BKmYCgQE/cbjYZbSuqycgCAKQLglpbuFsQPhnx+sf+Sw+X/sAT2Ae+2TkPfbMZae2UUTkPfbJ2qE5moLOEGuNSB9nM4avfuvlQgbw8M92zOAsG990n7pO+TplZSg2vnhonMzPlzqvZzOKCcNXv3Ztnz0+fEuPKn2e5g9zB7mDN+oxWnu4YJtyEfvJyeSJi77pO+Q/Zv0/dsyduPCC94J1dD510nbJdrxcstlsQRrgnZ5510pA+zmdazyc4iLzMnbjwgxvPeF8G99OUzrtk5EBbUGRun/o6kXCIYI6Fh7wfBKH1OITST0U9qhf30UjOHXz/fFhBgwjOREROM2rd2f0Cs5VMrKhX/K+sxyREROIHch8NPfEepnno0KjFw9y4hkUVoiyW7bPUVP3nqKpxKk6O0SxKFOBRWpWBKVjxDrJryCmZ2BWSaKERETylnYJGVP3nqKn7z0/itVEelIIhViKcPwbz956ip+86n3/dzelfAkUh7Y/3jvaP0R1g7BFVKXT7/IqYhLBUX/VvEOrwGiOsm2wB/czxDeaNZtp/d9NtgKslZIun04kac2oYutOdSKIgu9d6seIdYJCnec0gNT214xSFSoD5AClejqVZ4BnoCXBm3GKT4Sl2vFzed4hXuJywDpeJsusrvaU4brB9QN68huS+NqGkHCefz1mV/oU7p6PCczignE91kP0YpSTsAD++B/SvGf2HtL49hZOoiZe+LbV8gZoOq9Ps+WvN81bS7PiPausY74UGZALtJiykEcR70R5kaJ3B3AIByGL8d7VWq0EIsBnXNsXK3p48/A7Yr+6yZ15yFEd44gKdc40xC4mDbQHPDM6OHmNsOZS+TYZEE5NLaFnLNKWPwb6cKBTsqQixEW6kUe7vSzEGMUHoDDWGaOJOYs5kZF59zSSS3zXTbA4czO3HWsY8SCI+aQiPQbwoAofAJp0YIBWrxU0N6aNAu1HZOlToRdo8j4OFSb1/ek17rIdnxohXRU6Z5KIx3kGS0GZ1BOd6Ac2jQjPjEj520s/7ImhEAAA" fill src="/cover_url_1.jpg" alt="" />
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
