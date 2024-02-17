import { ReactComponent as Volume } from '@/shared/icons/volume.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './VolumeButton.module.scss';

interface VolumeButtonProps {
    className?:string
}

export function VolumeButton({ className }: VolumeButtonProps) {
    return (
        <ControlButtonWrapper className={`${className} ${cls.button}`}>
            <Volume />
        </ControlButtonWrapper>
    );
}
