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
    return (
        <TrackListSwipeWrapper>
            <AudioContextProvider>
                <div className={clsx(cls.wrapper)}>
                    <Suspense fallback="loading">

                        <StoreInitializer />
                        <SearchParamsChanger />
                    </Suspense>

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
