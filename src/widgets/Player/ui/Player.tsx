'use client';

import { TrackList, TrackListSwipeWrapper } from '@/entities/Track';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import { TimeLine } from '@/features/TimeLine';
import StoreInitializer from '@/store/StoreInitializer';
import clsx from 'clsx';
import { AudioContextProvider } from '@/entities/PlayerRef';
import { SearchParamsChanger } from '@/features/SearchParamsChanger';
import { Suspense } from 'react';
import { filteredTracks as tracks } from '@/data/tracks';
import { usePlayerStore } from '@/store/PlayerStore';
import cls from './Player.module.scss';
import { TypographyContent } from './TypographyContent/TypographyContent';
import { ImageContent } from './ImageContent/ImageContent';

export function Player() {
    const { currentTrack } = usePlayerStore();
    return (
        <TrackListSwipeWrapper>
            <AudioContextProvider>
                <div id="player" className={clsx(cls.wrapper)}>
                    <Suspense>

                        <SearchParamsChanger />
                    </Suspense>
                    <StoreInitializer tracks={tracks} />

                    <div className={cls.player_top}>
                        <ImageContent />
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                        <audio controls src={currentTrack?.audio} />
                        <TypographyContent />
                    </div>
                    <div className={cls.player_bottom}>
                        <TimeLine className={cls.timeline} />
                        <PlayerControls className={cls.controls} />
                        <PlayerFloatingMenu className={cls.float_menu} />
                    </div>
                    <TrackList />
                </div>
            </AudioContextProvider>
        </TrackListSwipeWrapper>

    );
}
