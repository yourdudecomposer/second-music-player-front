import { ITrack } from '@/types';
import { TrackList, TrackListSwipeWrapper } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import Typography from '@/shared/Typography/Typography';
import { TimeLine } from '@/features/TimeLine';
import { usePlayerStore } from '@/store/PlayerStore';
import StoreInitializer from '@/store/StoreInitializer';
import cls from './Player.module.scss';

interface PlayerProps {
    className?:string
}

export async function Player({ className }: PlayerProps) {
    const data = await fetch('http://192.168.56.22:3000/tracks');
    const tracks:ITrack[] = await data.json();

    usePlayerStore.setState({ tracks }); // add tracks to server side store

    return (
        <TrackListSwipeWrapper>
            <div className={`${cls.wrapper} player_purple`}>

                <StoreInitializer tracks={tracks} />
                <div className={cls.image_wrapper}>
                    <Image fill src="/cover_url_1.jpg" alt="" />
                </div>
                <Typography isPlayerText className={cls.title} as="h2" text="Player Title Track" />
                <Typography isPlayerText className={cls.description} text="Player description track" />
                <TimeLine />
                <PlayerControls />
                <PlayerFloatingMenu />
                <TrackList />
            </div>
        </TrackListSwipeWrapper>

    );
}
