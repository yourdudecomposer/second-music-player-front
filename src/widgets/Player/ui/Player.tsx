import { ITrack } from '@/types';
import { TrackList } from '@/entities/Track';
import Image from 'next/image';
import { PlayerFloatingMenu } from '@/features/PlayerFloatingMobileMenu';
import { PlayerControls } from '@/features/PlayerControls';
import Typography from '@/shared/Typography/Typography';
import { TimeLine } from '@/features/TimeLine';
import cls from './Player.module.scss';

export async function Player() {
    const data = await fetch('http://localhost:3000/tracks');
    const tracks:ITrack[] = await data.json();

    return (

        <div className={cls.wrapper}>
            <div className={cls.image_wrapper}>
                <Image objectFit="cover" fill src={tracks[0].cover} alt="" />
            </div>
            <Typography isPlayerText className={cls.title} as="h2" text="Player Title Track" />
            <Typography isPlayerText className={cls.description} text="Player description track" />
            <TimeLine />
            <PlayerControls />
            <PlayerFloatingMenu />
            <TrackList tracks={tracks} />
        </div>
    );
}
