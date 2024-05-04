'use client';

import { useLanguage } from '@/features/LanguageSwitcher';
import { usePlayerStore } from '@/store/PlayerStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export function SearchParamsChanger() { // also here we define title
    const { language } = useLanguage();
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
        const id = searchParams.get('trackId');
        if (!id || !tracks.some((el) => el.id === +id)) {
            setCurrentTrack(tracks[0]?.id);
        } else {
            setCurrentTrack(+id);
        }
    }, [searchParams, setCurrentTrack, tracks]);

    useEffect(() => {
        if (currentTrack?.id && pathname === '/') {
            document.title = `guitar player${currentTrack.title[language || 'en'] ? ` - ${currentTrack.title[language || 'en']}` : ''}`;
            router.replace(`?${createQueryString('trackId', currentTrack?.id.toString())}`, { scroll: false });
        }
    }, [createQueryString, currentTrack?.id, currentTrack?.title, language, pathname, router]);
    return null;
}
