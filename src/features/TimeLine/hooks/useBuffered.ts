import { useAudioContext } from '@/entities/PlayerRef';
import { useCallback, useEffect, useState } from 'react';

export const useBuffered = () => {
    const player = useAudioContext();

    const [buffered, setBuffered] = useState<number>(0);

    // eslint-disable-next-line no-unused-vars
    const onProgress = useCallback((e: any) => {
        if (player) {
            const { duration } = player;
            if (duration > 0) {
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < player.buffered.length; i++) {
                    if (
                        player.buffered.start(player.buffered.length - 1 - i)
      < player.currentTime
                    ) {
                        // eslint-disable-next-line no-console
                        setBuffered((player.buffered.end(player.buffered.length - 1 - i) * 100) / duration);

                        break;
                    }
                }
            }
        }
    }, [player]);

    useEffect(() => {
        player?.addEventListener('progress', onProgress);
        return () => { player?.removeEventListener('progress', onProgress); };
    }, [onProgress, player]);

    return buffered;
};
