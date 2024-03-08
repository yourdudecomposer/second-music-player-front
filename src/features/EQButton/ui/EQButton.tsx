import { ReactComponent as EQ } from '@/shared/icons/eq.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import clsx from 'clsx';
import cls from './EQButton.module.scss';

interface EQButtonProps {
    className?:string
}

export function EQButton({ className }: EQButtonProps) {
    return (

        <ControlButtonWrapper className={clsx(className, cls.button)}>
            <EQ />
        </ControlButtonWrapper>
    );
}
