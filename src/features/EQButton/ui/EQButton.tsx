import { ReactComponent as EQ } from '@/shared/icons/eq.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './EQButton.module.scss';

interface EQButtonProps {
    className?:string
}

export function EQButton({ className }: EQButtonProps) {
    return (

        <ControlButtonWrapper className={`${cls.button}`}>
            <EQ />
        </ControlButtonWrapper>
    );
}
