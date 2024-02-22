import Image from 'next/image';
import Typography from '@/shared/Typography/Typography';
import { CSSProperties, FC } from 'react';
import cls from './TrackListItem.module.scss';

interface TrackListItemProps{
    title: string
    description: string
    cover:string
    style?:CSSProperties
}

export function TrackListItem({
    title, description, cover, style,
}: TrackListItemProps) {
    return (
        <div style={style} className={cls.wrapper}>
            <div onClick={() => {}} className={cls.image}>
                <Image fill src={cover} alt="" />
            </div>
            <div className={cls.text}>
                <Typography as="h3" isPlayerText text={title} />
                <Typography isPlayerText text={description} />

            </div>
        </div>
    );
}
