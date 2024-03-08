'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import cls from './TrackList.module.scss';
import { TrackListItem } from '../TrackListItem/TrackListItem';

interface TrackListProps {
    className?:string
}

const scrollToUp = (e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    return false;
};

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () {};
}

export function TrackList({ className }: TrackListProps) {
    const { isTrackListVisible, setIsTrackListVisible, currentTrack } = usePlayerStore();
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        if (isTrackListVisible) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isTrackListVisible]);
    useEffect(() => {
        if (isTrackListVisible) {
            setOpacity(true);
        } else {
            setOpacity(false);
        }
    }, [isTrackListVisible]);

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
        <>
            { isTrackListVisible && <div onClick={() => setIsTrackListVisible(false)} className={clsx(cls.overlay, opacity && cls.opacity)} />}
            <div className={clsx(className, cls.wrapper, isTrackListVisible && cls.show_tracklist)}>
                {
                    usePlayerStore.getState().tracks
                        .map((el) => <TrackListItem isTrackPlaying={currentTrack?.id === el.id} key={el.id} title={el.title} description={el.description} cover={el.cover} id={el.id} />)
                        .concat(<TrackListItem className={cls.lastElem} key={999} style={{ opacity: 0 }} title="" description="" cover="" />)
                }
            </div>
        </>
    );
}
