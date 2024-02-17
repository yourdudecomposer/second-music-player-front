import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './PrevButton.module.scss';

interface PrevButtonProps {
    className?:string
}

export function PrevButton({ className }: PrevButtonProps) {
    return (
        <ControlButtonWrapper className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
