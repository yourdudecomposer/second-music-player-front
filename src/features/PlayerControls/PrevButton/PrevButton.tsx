import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { useChangeTrack } from '@/entities/Track';
import cls from './PrevButton.module.scss';

interface PrevButtonProps {
    className?:string
}

export function PrevButton({ className }: PrevButtonProps) {
    const changeTrack = useChangeTrack();
    const click = () => {
        changeTrack('prev');
    };
    return (
        <ControlButtonWrapper onClick={click} className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
