import { useAudioContext } from '@/entities/PlayerRef';
import { timeFormat } from '@/shared/utils/timeFormat/timeFormat';
import { usePlayerStore } from '@/store/PlayerStore';
import { useEffect, useState } from 'react';

export const useCurrentTime = () => {
    const player = useAudioContext();
    const { isPlaying } = usePlayerStore();

    const [currentTimerTime, setCurrentTimerTime] = useState<string>(timeFormat(player?.currentTime || 0));

    useEffect(() => {
        let timerId: ReturnType<typeof setInterval>;
        if (isPlaying) {
            timerId = setInterval(() => setCurrentTimerTime(timeFormat(player?.currentTime || 0)), 1000);
            return () => clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [player?.currentTime, isPlaying]);

    useEffect(() => {
        if (player?.currentTime === 0) {
            setCurrentTimerTime(timeFormat(player?.currentTime));
        }
    }, [player?.currentTime]);

    return { currentTimerTime, setCurrentTimerTime };
};
