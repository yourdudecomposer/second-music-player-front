'use client';

import { useMemo, useState } from 'react';
import cls from './StyledRange.module.scss';

interface StyledRangeProps {
    className?:string
}

export function StyledRange({ className }: StyledRangeProps) {
    const [value, setValue] = useState(10);
    const maxValue = 100;
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const styleObj = useMemo(() => {
        const progress = (value / maxValue) * 100;
        return { background: `linear-gradient(to right, #4936CC ${progress}%, #dcdcdc ${progress}%)` };
    }, [value]);
    return (
        <input style={styleObj} type="range" min="0" max={maxValue} value={value} onInput={handleChange} id="range2" className={cls.range_input} />
    );
}
