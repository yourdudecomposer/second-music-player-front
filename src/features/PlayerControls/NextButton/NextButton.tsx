'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { useChangeTrack } from '@/entities/Track';
import cls from './NextButton.module.scss';

export function NextButton() {
    const changeTrack = useChangeTrack();
    const click = () => {
        changeTrack('next');
    };
    return (
        <ControlButtonWrapper onClick={click} className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
