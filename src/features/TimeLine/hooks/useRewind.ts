import { useAudioContext } from '@/entities/PlayerRef';
import { useCallback, useEffect } from 'react';

export const useRewind = () => {
    const player = useAudioContext();

    const arrowHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (player?.currentTime) {
                player.currentTime -= 5;
            }
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (player?.currentTime) {
                player.currentTime += 5;
            }
        }
    }, [player]);

    useEffect(() => {
        window.addEventListener('keydown', arrowHandler);
        return () => { window.removeEventListener('keydown', arrowHandler); };
    }, [arrowHandler]);
};
