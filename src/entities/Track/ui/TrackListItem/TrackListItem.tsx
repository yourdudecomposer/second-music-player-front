/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Image from 'next/image';
import Typography from '@/shared/Typography/Typography';
import { CSSProperties, useEffect, useState } from 'react';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useAudioContext } from '@/entities/PlayerRef';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import { Skeleton } from '@/shared/Skeleton';
import { imageBlurData } from '@/data/image';
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
    const [source, setSource] = useState<string>(imageBlurData);

    useEffect(() => {
        if (cover) {
            setSource(cover);
        }
    }, [cover]);
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
                <Image onError={() => setSource(imageBlurData)} placeholder="blur" blurDataURL={imageBlurData} fill src={source} alt="" />
            </div>
            <div className={cls.text}>
                {!isHydration ? <Skeleton className={cls.title_skeleton} /> : <Typography as="h3" isPlayerText className={cls.title} text={title} />}
                {!isHydration ? <Skeleton className={cls.description_skeleton} /> : <Typography isPlayerText className="plain_text_size" text={description} />}
            </div>
            {isTrackPlaying && <Bars />}
        </div>
    );
}
