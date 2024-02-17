import { ReactComponent as Note } from '@/shared/icons/note.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import cls from './NoteButton.module.scss';

interface NoteButtonProps {
    className?:string
}

export function NoteButton({ className }: NoteButtonProps) {
    return (
        <ControlButtonWrapper className={`${className} ${cls.button}`}>
            <Note />
        </ControlButtonWrapper>
    );
}
