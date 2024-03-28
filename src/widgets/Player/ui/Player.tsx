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
            // eslint-disable-next-line max-len
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
