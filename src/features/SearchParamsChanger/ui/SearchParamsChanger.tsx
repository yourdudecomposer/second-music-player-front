'use client';

import { usePlayerStore } from '@/store/PlayerStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export function SearchParamsChanger() {
    const { currentTrack, setCurrentTrack, tracks } = usePlayerStore();
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
        if (pathname !== '/') {
            router.push('/');
        }
    }, [pathname, router]);
    useEffect(() => {
        const id = searchParams.get('trackId');
        if (!id) {
            setCurrentTrack(1);
        } else if (+id > 0 && +id < tracks.length) {
            setCurrentTrack(+id);
        } else {
            setCurrentTrack(1);
        }
    }, [searchParams, setCurrentTrack, tracks.length]);

    useEffect(() => {
        console.log(213);
        if (currentTrack?.id) {
            router.replace(`?${createQueryString('trackId', currentTrack?.id.toString())}`, { scroll: false });
        }
    }, [createQueryString, currentTrack?.id, pathname, router]);
    return null;
}
