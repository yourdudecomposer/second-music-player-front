'use client';

import {
    ChangeEvent, MouseEvent, TouchEvent, useEffect, useMemo, useState,
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
    const [progress, setProgress] = useState(0);

    const styleObjTime = useMemo(() => {
        if (value === 0) return {};
        setProgress((value / maxValue) * 100);
        return { background: `linear-gradient(to right, #4936CC calc(${progress}%), transparent ${progress}%)` };
    }, [maxValue, progress, value]);
    const styleObjBuffer = useMemo(() => ({ width: `${Math.floor(buffered)}%` }), [buffered]); // when buffered < 1 timeline styles break
    useEffect(() => {
        const slider = document.getElementById('range2');
        const transform = `${(progress / 100) * 35}%`;
        if (slider) {
            slider.style.setProperty('--transform', transform);
        }
    }, [progress]);
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
