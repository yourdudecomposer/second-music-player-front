import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { ReactComponent as RepeatAll } from '@/shared/icons/repeatAll.svg';
import { ReactComponent as RepeatOne } from '@/shared/icons/repeatOne.svg';
import { RepeatType } from '@/types';
import cls from './RepeatButton.module.scss';

interface RepeatButtonProps {
    className?: string
}

const repeatVal:RepeatType[] = ['none', 'all', 'one'];

const renderSvg = (repeat: RepeatType) => {
    switch (repeat) {
    case 'none':
    case 'all':
        return <RepeatAll />;
    case 'one':
        return <RepeatOne />;

    default:
        return null;
    }
};

export function RepeatButton({ className }: RepeatButtonProps) {
    const { repeat, setRepeat } = usePlayerStore();

    const handleClick = () => {
        let indexOfCurr = repeatVal.indexOf(repeat);
        if (indexOfCurr < repeatVal.length - 1) {
            // eslint-disable-next-line no-plusplus
            indexOfCurr++;
            setRepeat(repeatVal[indexOfCurr]);
        } else {
            setRepeat(repeatVal[0]);
        }
    };

    return (
        <ControlButtonWrapper onClick={handleClick} className={clsx(cls.button, (repeat === 'all' || repeat === 'one') && cls.active)}>
            {renderSvg(repeat)}
        </ControlButtonWrapper>
    );
}
