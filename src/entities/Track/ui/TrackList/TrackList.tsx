/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import Typography from '@/shared/Typography/Typography';
import cls from './TrackList.module.scss';
import { TrackListItem } from '../TrackListItem/TrackListItem';

interface TrackListProps {
    className?:string
}

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // eslint-disable-next-line func-names
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    // eslint-disable-next-line func-names
    window.onscroll = function () {};
}

export function TrackList({ className }: TrackListProps) {
    const { isTrackListVisible, setIsTrackListVisible, currentTrack } = usePlayerStore();
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

    const getList = () => {
        if (usePlayerStore.getState().tracks.length === 0) {
            return (
                <div className={cls.err}>
                    <Typography isPlayerText text="что-то пошло не так" />
                </div>
            );
        }

        return usePlayerStore.getState().tracks
            .map((el) => <TrackListItem isTrackPlaying={currentTrack?.id === el.id} key={el.id} title={el.title} description={el.description} cover={el.cover} id={el.id} />)
            .concat(<TrackListItem id={999} className={cls.lastElem} key={999} style={{ opacity: 0 }} title="" description="" cover="" />);
    };

    return (
        <>
            { isTrackListVisible && <div onClick={() => setIsTrackListVisible(false)} className={clsx(cls.overlay, opacity && cls.opacity)} />}
            <div className={clsx(className, cls.wrapper, isTrackListVisible && cls.show_tracklist)}>
                {getList()}
            </div>
        </>
    );
}
