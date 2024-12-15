'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare let ym: any;

export default function Metrika({ num }:{num:number}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        console.log('Metrika: ', num);

        ym(num, 'hit', url);
    }, [pathname, searchParams]);

    return null;
}
