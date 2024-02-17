import { NoteButton } from '@/features/NoteButton';
import { ShowTrackListButton } from '@/features/ShowTrackListButton';
import { EQButton } from '@/features/EQButton';
import { VolumeButton } from '@/features/VolumeButton';
import cls from './PlayerFloatingMenu.module.scss';

interface PlayerFloatingMenuProps {
    className?:string
}

export function PlayerFloatingMenu({ className }: PlayerFloatingMenuProps) {
    return (
        <div className={`${className} ${cls.div}`}>
            <ShowTrackListButton />
            <NoteButton />
            <EQButton />
            <VolumeButton />
        </div>
    );
}
