'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export function SearchParamsChanger() {
    const { currentTrack } = usePlayerStore();
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    useEffect(() => {
        router.push(`${pathname}?${createQueryString('trackId', currentTrack?.id.toString() || '')}`, { scroll: false });
    }, [createQueryString, currentTrack, pathname, router]);
    return null;
}
