import { useAudioContext } from '@/entities/PlayerRef';
import { useCallback, useEffect, useState } from 'react';

export const useBuffered = () => {
    const player = useAudioContext();

    const [buffered, setBuffered] = useState<number>(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const progressFunc = useCallback(() => {
        const bufferedEnd = player?.buffered?.end(player.buffered.length - 1) || 0;
        const duration = player?.duration || 0;
        if (duration > 0) {
            setBuffered((bufferedEnd / duration) * 100);
        }
    }, [player?.buffered, player?.duration]);
    useEffect(() => {
        const style1 = 'color:yellow; font-size:30px; font-weight: bold; -webkit-text-stroke: 1px black;';
        const style2 = 'color:green; font-size:30px; font-weight: bold; -webkit-text-stroke: 1px black;';
        console.log('%c Also i am a frontend developer. But this site about music, not about my codding skills.', style1);
        console.log('%c Thank you for listening!', style2);
    }, []);
    useEffect(() => {
        player?.addEventListener('progress', progressFunc);
        return () => {
            player?.removeEventListener('progress', progressFunc);
        };
    }, [player, progressFunc]);

    return buffered;
};
