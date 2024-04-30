/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import Typography from '@/shared/Typography/Typography';
import { CSSProperties } from 'react';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useAudioContext } from '@/entities/PlayerRef';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import { Skeleton } from '@/shared/Skeleton';
import cls from './TrackListItem.module.scss';
import { Bars } from '../Bars/Bars';

interface TrackListItemProps{
    title: string
    description: string
    cover:string
    id:number
    isTrackPlaying?:boolean
    style?:CSSProperties
    className?:string

}

export function TrackListItem({
    title, description, cover, id, isTrackPlaying, style, className,
}: TrackListItemProps) {
    const {
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack,
        setIsTrackListVisible,
    } = usePlayerStore();
    const player = useAudioContext();
    const isHydration = useHydration();
    const playPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };
    const clickHandler = () => {
        if (title === currentTrack?.title.en) {
            playPause();
        } else {
            setCurrentTrack(id);
            if (player?.currentTime) {
                player.currentTime = 0;
            }
            setIsPlaying(true);

            // нужно ли очищать
            setTimeout(() => {
                setIsTrackListVisible(false);
            }, 100);
        }
    };
    return (
        <div onClick={clickHandler} style={style} className={clsx(className, cls.wrapper)}>
            <div className={cls.image}>
                {/* eslint-disable-next-line max-len */}
                <Image placeholder="blur" blurDataURL="data:image/webp;base64,UklGRvwEAABXRUJQVlA4WAoAAAAgAAAAZQIAgAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggDgMAAFBBAJ0BKmYCgQE/cbjYZbSuqycgCAKQLglpbuFsQPhnx+sf+Sw+X/sAT2Ae+2TkPfbMZae2UUTkPfbJ2qE5moLOEGuNSB9nM4avfuvlQgbw8M92zOAsG990n7pO+TplZSg2vnhonMzPlzqvZzOKCcNXv3Ztnz0+fEuPKn2e5g9zB7mDN+oxWnu4YJtyEfvJyeSJi77pO+Q/Zv0/dsyduPCC94J1dD510nbJdrxcstlsQRrgnZ5510pA+zmdazyc4iLzMnbjwgxvPeF8G99OUzrtk5EBbUGRun/o6kXCIYI6Fh7wfBKH1OITST0U9qhf30UjOHXz/fFhBgwjOREROM2rd2f0Cs5VMrKhX/K+sxyREROIHch8NPfEepnno0KjFw9y4hkUVoiyW7bPUVP3nqKpxKk6O0SxKFOBRWpWBKVjxDrJryCmZ2BWSaKERETylnYJGVP3nqKn7z0/itVEelIIhViKcPwbz956ip+86n3/dzelfAkUh7Y/3jvaP0R1g7BFVKXT7/IqYhLBUX/VvEOrwGiOsm2wB/czxDeaNZtp/d9NtgKslZIun04kac2oYutOdSKIgu9d6seIdYJCnec0gNT214xSFSoD5AClejqVZ4BnoCXBm3GKT4Sl2vFzed4hXuJywDpeJsusrvaU4brB9QN68huS+NqGkHCefz1mV/oU7p6PCczignE91kP0YpSTsAD++B/SvGf2HtL49hZOoiZe+LbV8gZoOq9Ps+WvN81bS7PiPausY74UGZALtJiykEcR70R5kaJ3B3AIByGL8d7VWq0EIsBnXNsXK3p48/A7Yr+6yZ15yFEd44gKdc40xC4mDbQHPDM6OHmNsOZS+TYZEE5NLaFnLNKWPwb6cKBTsqQixEW6kUe7vSzEGMUHoDDWGaOJOYs5kZF59zSSS3zXTbA4czO3HWsY8SCI+aQiPQbwoAofAJp0YIBWrxU0N6aNAu1HZOlToRdo8j4OFSb1/ek17rIdnxohXRU6Z5KIx3kGS0GZ1BOd6Ac2jQjPjEj520s/7ImhEAAA" fill src={cover} alt="" />
            </div>
            <div className={cls.text}>
                {!isHydration ? <Skeleton className={cls.title_skeleton} /> : <Typography as="h3" isPlayerText className={cls.title} text={title} />}
                {!isHydration ? <Skeleton className={cls.description_skeleton} /> : <Typography isPlayerText className="plain_text_size" text={description} />}
            </div>
            {isTrackPlaying && <Bars />}
        </div>
    );
}
