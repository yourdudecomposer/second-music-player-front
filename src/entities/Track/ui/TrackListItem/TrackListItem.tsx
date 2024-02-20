'use client';

import Image from 'next/image';
import Typography from '@/shared/Typography/Typography';
import { useTracksStore } from '@/store/tracksStore';
import cls from './TrackListItem.module.scss';

interface TrackListItemProps {
    title: string
    description: string
    cover:string
}

export function TrackListItem({ title, description, cover }: TrackListItemProps) {
    const { currentTrack, setCurrentTrack, tracks } = useTracksStore();
    console.log(tracks, currentTrack);
    return (
        <div className={cls.wrapper}>
            <div onClick={() => setCurrentTrack(2)} className={cls.image}>
                <Image fill src={cover} alt="" />
            </div>
            <div className={cls.text}>
                <Typography as="h3" isPlayerText text={title} />
                <Typography isPlayerText text={description} />

            </div>
        </div>
    );
}
