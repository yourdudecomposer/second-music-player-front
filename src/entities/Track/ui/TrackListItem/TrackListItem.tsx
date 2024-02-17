import Image from 'next/image';
import cls from './TrackListItem.module.scss';

interface TrackListItemProps {
    title: string
    description: string
    cover:string
}

export function TrackListItem({ title, description, cover }: TrackListItemProps) {
    return (
        <div className={cls.wrapper}>
            <p>{title}</p>
            <p>{description}</p>
            <Image width={500} height={500} src={cover} alt="" />
        </div>
    );
}
