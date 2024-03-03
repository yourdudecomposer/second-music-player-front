'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useState } from 'react';
import cls from './TrackList.module.scss';
import { TrackListItem } from '../TrackListItem/TrackListItem';

interface TrackListProps {
    className?:string
}

export function TrackList({ className }: TrackListProps) {
    const { isTrackListVisible, setIsTrackListVisible, currentTrack } = usePlayerStore();
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right');
        // add your conditional logic here
        if (isRightSwipe) {
            setIsTrackListVisible(false);
        }
    };

    return (
        <div className={clsx(className, cls.wrapper, isTrackListVisible && cls.show_tracklist)}>
            {
                usePlayerStore.getState().tracks
                    .map((el) => <TrackListItem isTrackPlaying={currentTrack?.id === el.id} key={el.id} title={el.title} description={el.description} cover={el.cover} id={el.id} />)
                    .concat(<TrackListItem key={999} style={{ opacity: 0 }} title="" description="" cover="" />)
            }
        </div>
    );
}
