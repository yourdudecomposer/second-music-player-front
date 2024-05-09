import { useEffect, useState } from 'react';

interface BufferedProps {
    className?:string
    buffered:number
}

export function Buffered({ className, buffered }: BufferedProps) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(buffered < 2 ? 0 : buffered);
    }, [buffered]);

    return <div style={{ width: `${width}%` }} className={className} />;
}
