import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import { usePlayerStore } from '@/store/PlayerStore';
import clsx from 'clsx';
import { ReactComponent as RepeatAll } from '@/shared/icons/repeatAll.svg';
import { ReactComponent as RepeatOne } from '@/shared/icons/repeatOne.svg';
import { RepeatType } from '@/types';
import { useMemo } from 'react';
import cls from './RepeatButton.module.scss';

const repeatVal:RepeatType[] = ['none', 'all', 'one'];

export function RepeatButton() {
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

    const Button = useMemo(() => {
        switch (repeat) {
        case 'none':
        case 'all':
            return <RepeatAll />;
        case 'one':
            return <RepeatOne />;

        default:
            return null;
        }
    }, [repeat]);

    return (
        <ControlButtonWrapper onClick={handleClick} className={clsx(cls.button, (repeat === 'all' || repeat === 'one') && cls.active)}>
            {Button}
        </ControlButtonWrapper>
    );
}
