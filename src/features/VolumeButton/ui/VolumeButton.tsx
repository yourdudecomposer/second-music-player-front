import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { useAudioContext } from '@/shared/AudioContextProvider/AudioContextProvider';
import { ReactComponent as VolumeOn } from '@/shared/icons/volumeOn.svg';
import { ReactComponent as VolumeOff } from '@/shared/icons/volumeOff.svg';
import { useState } from 'react';
import clsx from 'clsx';
import cls from './VolumeButton.module.scss';

interface VolumeButtonProps {
    className?:string
}

export function VolumeButton({ className }: VolumeButtonProps) {
    const audioRef = useAudioContext();
    const [isMuted, setIsMuted] = useState(false);
    const clickHandler = () => {
        if (!audioRef) return;
        if (audioRef.muted) {
            audioRef.muted = false;
            setIsMuted(false);
        } else {
            audioRef.muted = true;
            setIsMuted(true);
        }
    };
    return (
        <ControlButtonWrapper onClick={clickHandler} className={clsx(className, cls.button, isMuted && cls.active)}>
            {isMuted ? <VolumeOff /> : <VolumeOn />}
        </ControlButtonWrapper>
    );
}
