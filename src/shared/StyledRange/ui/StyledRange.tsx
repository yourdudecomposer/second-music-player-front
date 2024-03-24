'use client';

import {
    ChangeEvent, MouseEvent, TouchEvent, useMemo,
} from 'react';
import cls from './StyledRange.module.scss';

interface StyledRangeProps {
    value:number
    buffered:number
    // eslint-disable-next-line no-unused-vars
    onInput:(e:ChangeEvent<HTMLInputElement>)=>void
    // eslint-disable-next-line no-unused-vars
    onMouseUp:(e:MouseEvent<HTMLInputElement>)=>void
    // eslint-disable-next-line no-unused-vars
    onTouchEnd:(e:TouchEvent<HTMLInputElement>)=>void
    minValue?:number
    maxValue?:number
}

export function StyledRange({
    value,
    // eslint-disable-next-line no-unused-vars
    buffered,
    onInput,
    onMouseUp,
    onTouchEnd,
    minValue = 0,
    maxValue = 100,
}: StyledRangeProps) {
    const styleObjTime = useMemo(() => {
        if (value === 0) return {};
        const progress = (value / maxValue) * 100;
        return { background: `linear-gradient(to right, #4936CC ${progress + 0.2}%, transparent ${progress}%)` };
    }, [maxValue, value]);
    const styleObjBuffer = useMemo(() => ({ width: `${buffered}%` }), [buffered]);

    return (
        <div className={cls.wrapper}>
            <div style={styleObjBuffer} className={cls.progress} />
            <input
                onTouchEnd={onTouchEnd}
                onMouseUp={onMouseUp}
                style={styleObjTime}
                type="range"
                min={minValue}
                max={maxValue}
                value={value}
                onInput={onInput}
                id="range2"
                className={cls.range_input}
            />
        </div>
    );
}
