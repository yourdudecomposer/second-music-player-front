'use client';

import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { usePlayerStore } from '@/store/PlayerStore';
import { useChangeTrack } from '@/entities/Track';
import cls from './NextButton.module.scss';

interface NextButtonProps {
    className?:string
}

export function NextButton({ className }: NextButtonProps) {
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
