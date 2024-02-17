import { ReactComponent as List } from '@/shared/icons/list.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './ShowTrackListButton.module.scss';

interface ShowTrackListButtonProps {
    className?:string
}

export function ShowTrackListButton({ className }: ShowTrackListButtonProps) {
    return (
        <ControlButtonWrapper className={cls.button}>
            <List />
        </ControlButtonWrapper>
    );
}
