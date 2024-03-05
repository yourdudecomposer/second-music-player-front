import { ReactComponent as Volume } from '@/shared/icons/volume.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { useAudioContext } from '@/shared/AudioContextProvider/AudioContextProvider';
import cls from './VolumeButton.module.scss';

interface VolumeButtonProps {
    className?:string
}

export function VolumeButton({ className }: VolumeButtonProps) {
    const audioRef = useAudioContext();

    const clickHandler = () => {
        if (audioRef && !audioRef.muted) {
            audioRef.muted = true;
        }
    };
    return (
        <ControlButtonWrapper onClick={clickHandler} className={`${className} ${cls.button}`}>
            <Volume />
        </ControlButtonWrapper>
    );
}
