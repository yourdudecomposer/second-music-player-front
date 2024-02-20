import { useTracksStore } from '@/store/tracksStore';
import cls from './TrackList.module.scss';
import { TrackListItem } from '../TrackListItem/TrackListItem';

interface TrackListProps {
    className?:string
}

export function TrackList({ className }: TrackListProps) {
    return (
        <div className={`${className} ${cls.wrapper}`}>
            {useTracksStore.getState().tracks.map((el) => <TrackListItem key={el.id} title={el.title} description={el.description} cover={el.cover} />)}
        </div>
    );
}
