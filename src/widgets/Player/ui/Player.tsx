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
import cls from './Player.module.scss';
import { TypographyContent } from './TypographyContent/TypographyContent';
import { ImageContent } from './ImageContent/ImageContent';

export function Player() {
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
