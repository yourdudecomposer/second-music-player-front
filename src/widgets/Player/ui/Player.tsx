import { ITrack } from '@/types';
import { TrackList } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import Typography from '@/shared/Typography/Typography';
import { TimeLine } from '@/features/TimeLine';
import { useTracksStore } from '@/store/tracksStore';
import StoreInitializer from '@/store/StoreInitializer';
import cls from './Player.module.scss';

interface PlayerProps {
    tracks:ITrack[]
    className?:string
}

export async function Player({ className }: PlayerProps) {
    const data = await fetch('http://192.168.56.22:3000/tracks');
    const tracks:ITrack[] = await data.json();
    useTracksStore.setState({ tracks });

    return (
        <div className={cls.wrapper}>
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
    );
}
