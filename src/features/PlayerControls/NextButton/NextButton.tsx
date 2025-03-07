'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { useChangeTrack } from '@/entities/Track';
import { useAudioContext } from '@/entities/PlayerRef';
import cls from './NextButton.module.scss';

export function NextButton() {
    const changeTrack = useChangeTrack();
    const player = useAudioContext();
    const click = () => {
        if (player?.currentTime) {
            player.currentTime = 0;
        }
        changeTrack('next');
    };
    return (
        <ControlButtonWrapper onClick={click} className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
