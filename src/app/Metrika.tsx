'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare let ym: any;

export default function Metrika() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        ym(97839372, 'hit', url);
    }, [pathname, searchParams]);

    return null;
}
