import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import cls from './NextButton.module.scss';

interface NextButtonProps {
    className?:string
}

export function NextButton({ className }: NextButtonProps) {
    return (
        <ControlButtonWrapper className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
