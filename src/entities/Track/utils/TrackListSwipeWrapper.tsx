'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { ReactNode, useState } from 'react';

export function TrackListSwipeWrapper({ children }:{children:ReactNode}) {
    const { setIsTrackListVisible } = usePlayerStore();

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e:any) => {
        setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e:any) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = (e:any) => {
        if (e.target.id === 'range2') return;
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right');
        // add your conditional logic here
        if (isLeftSwipe) {
            setIsTrackListVisible(true);
        } else if (isRightSwipe) {
            setIsTrackListVisible(false);
        }
    };

    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            {children}
        </div>
    );
}
