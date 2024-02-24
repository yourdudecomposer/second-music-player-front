import { ITrack } from '@/types';
import { TrackList, TrackListSwipeWrapper } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import { TimeLine } from '@/features/TimeLine';
import { usePlayerStore } from '@/store/PlayerStore';
import StoreInitializer from '@/store/StoreInitializer';
import clsx from 'clsx';
import cls from './Player.module.scss';
import { TypographyContent } from './TypographyContent/TypographyContent';

export async function Player() {
    const data = await fetch('http://192.168.56.22:3000/tracks');
    const tracks:ITrack[] = await data.json();

    usePlayerStore.setState({ tracks }); // add tracks to server side store to get it on server components
    usePlayerStore.setState({ currentTrack: tracks[0] }); // add tracks to server side store to get it on server components

    return (
        <TrackListSwipeWrapper>
            <div className={clsx(cls.wrapper, 'player_purple')}>

                <StoreInitializer tracks={tracks} />
                <div className={cls.image_wrapper}>
                    <Image fill src="/cover_url_1.jpg" alt="" />
                </div>
                <TypographyContent />
                <TimeLine />
                <PlayerControls />
                {/* <PlayerFloatingMenu /> */}
                <TrackList />
            </div>
        </TrackListSwipeWrapper>

    );
}
