import Image from 'next/image';
import Typography from '@/shared/Typography/Typography';
import { CSSProperties } from 'react';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import cls from './TrackListItem.module.scss';
import { Bars } from '../Bars/Bars';

interface TrackListItemProps{
    title: string
    description: string
    cover:string
    id?:string
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
    } = usePlayerStore();
    const playPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    };
    const clickHandler = () => {
        if (title === currentTrack?.title) {
            playPause();
        } else {
            setCurrentTrack(id);
            setIsPlaying(true);
        }
    };
    return (
        <div onClick={clickHandler} style={style} className={clsx(className, cls.wrapper)}>
            <div className={cls.image}>
                <Image fill src={cover} alt="" />
            </div>
            <div className={cls.text}>
                <Typography as="h3" isPlayerText text={title} />
                <Typography isPlayerText text={description} />

            </div>
            {isTrackPlaying && <Bars />}
        </div>
    );
}
