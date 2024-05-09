import { useEffect, useState } from 'react';
import cls from './Buffered.module.scss';

interface BufferedProps {
    className?:string
    buffered:number
}

export function Buffered({ className, buffered }: BufferedProps) {
    const [obj, setObj] = useState({});
    useEffect(() => {
        setObj({ width: `${buffered < 2 ? 0 : buffered}%` });
    }, [buffered]);
    return (
        <div style={obj} className={`${className} ${cls.div}`} />
    );
}
