'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare let ym: any;

export default function Metrika() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        ym(process.env.YM_CODE, 'hit', url);
    }, [pathname, searchParams]);

    return null;
}
