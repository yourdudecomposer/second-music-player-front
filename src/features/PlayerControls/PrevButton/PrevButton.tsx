import { ReactComponent as Arrow } from '@/shared/icons/arrow.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { useChangeTrack } from '@/entities/Track';
import { useAudioContext } from '@/entities/PlayerRef';
import cls from './PrevButton.module.scss';

export function PrevButton() {
    const changeTrack = useChangeTrack();
    const player = useAudioContext();

    const click = () => {
        if (player?.currentTime) {
            player.currentTime = 0;
        }
        changeTrack('prev');
    };
    return (
        <ControlButtonWrapper onClick={click} className={cls.button}>
            <Arrow />
        </ControlButtonWrapper>
    );
}
