import { useAudioContext } from '@/entities/PlayerRef';
import { useCallback, useEffect, useState } from 'react';

export const useBuffered = () => {
    const player = useAudioContext();

    const [buffered, setBuffered] = useState<number>(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const progressFunc = useCallback(() => {
        const bufferedEnd = player?.buffered.end(player.buffered.length - 1) || 0;
        const duration = player?.duration || 0;
        if (duration > 0) {
            setBuffered((bufferedEnd / duration) * 100);
        }
    }, [player?.buffered, player?.duration]);

    useEffect(() => {
        player?.addEventListener('progress', progressFunc);
        return () => {
            player?.removeEventListener('progress', progressFunc);
        };
    }, [player, progressFunc]);

    useEffect(() => { console.log(buffered); }, [buffered]);

    return buffered;
};
