import { useAudioContext } from '@/entities/PlayerRef';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
    const player = useAudioContext();
    const { isPlaying } = usePlayerStore();

    const [currentTime, setCurrentTime] = useState<string>(timeFormat(player?.currentTime || 0));

    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;
        if (isPlaying) {
            timerId = setInterval(() => setCurrentTime(timeFormat(player?.currentTime || 0)), 1000);
            return () => clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [player?.currentTime, isPlaying]);

    useEffect(() => {
        if (player?.currentTime === 0) {
            setCurrentTime(timeFormat(player?.currentTime));
        }
    }, [player?.currentTime]);

    return currentTime;
};
