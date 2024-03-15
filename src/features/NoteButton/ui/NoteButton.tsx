import { ReactComponent as Note } from '@/shared/icons/note.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import clsx from 'clsx';
import { usePlayerStore } from '@/store/PlayerStore';
import cls from './NoteButton.module.scss';

export function NoteButton() {
    const { isTrackListVisible, setIsTrackListVisible } = usePlayerStore();
    return (
        <ControlButtonWrapper onClick={() => { setIsTrackListVisible(false); }} className={clsx(cls.button, !isTrackListVisible && cls.active)}>
            <Note />
        </ControlButtonWrapper>
    );
}
