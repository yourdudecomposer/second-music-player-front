'use client';

import { ChangeEvent, useMemo } from 'react';
import cls from './StyledRange.module.scss';

interface StyledRangeProps {
    value:number
    // eslint-disable-next-line no-unused-vars
    onInput:(e:ChangeEvent<HTMLInputElement>)=>void
    minValue?:number
    maxValue?:number
    className?:string
}

export function StyledRange({
    value,
    onInput,
    minValue = 0,
    maxValue = 100,
    className,
}: StyledRangeProps) {
    const styleObj = useMemo(() => {
        const progress = (value / maxValue) * 100;
        return { background: `linear-gradient(to right, #4936CC ${progress}%, #dcdcdc ${progress}%)` };
    }, [value]);
    return (
        <input style={styleObj} type="range" min={minValue} max={maxValue} value={value} onInput={onInput} id="range2" className={cls.range_input} />
    );
}
