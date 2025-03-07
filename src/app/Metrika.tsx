'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare let ym: any;

export default function Metrika({ num }:{num:string}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        ym(+num, 'hit', url);
    }, [num, pathname, searchParams]);

    return null;
}
