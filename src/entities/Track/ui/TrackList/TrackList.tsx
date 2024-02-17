import { ITrack } from '@/types';
import cls from './TrackList.module.scss';
import { TrackListItem } from '../TrackListItem/TrackListItem';

interface TrackListProps {
    tracks:ITrack[]
    className?:string
}

export function TrackList({ tracks, className }: TrackListProps) {
    return (
        <div className={`${className} ${cls.wrapper}`}>
            {tracks.map((el) => <TrackListItem title={el.title} description={el.description} cover={el.cover} />)}
        </div>
    );
}
