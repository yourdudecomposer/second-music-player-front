import { ReactComponent as Repeat } from '@/shared/icons/repeat.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './RepeatButton.module.scss';

interface RepeatButtonProps {
    className?:string
}

export function RepeatButton({ className }: RepeatButtonProps) {
    return (
        <ControlButtonWrapper
            className={cls.button}
        >

            <Repeat />
        </ControlButtonWrapper>
    );
}
