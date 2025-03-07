import clsx from 'clsx';
import { ReactComponent as Vk } from '@/shared/icons/vk.svg';
import { ReactComponent as Youtube } from '@/shared/icons/youtube.svg';
import { ReactComponent as Telegram } from '@/shared/icons/telegram.svg';
import { ReactComponent as Spotify } from '@/shared/icons/spotify.svg';
import { SocialSvgWrapper } from '@/shared/SocialSvgWrapper/SocialSvgWrapper';
import cls from './Contacts.module.scss';

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    return (
        <div className={clsx(className, cls.div, 'plain_text_size')}>
            <a className={cls.mail_link} href="mailto:goriainovfilipp@yandex.ru">goriainovfilipp@yandex.ru</a>
            <div className={cls.social_wrapper}>
                <SocialSvgWrapper href="https://www.youtube.com/@filippgoriainov" color="red">
                    <Youtube />
                </SocialSvgWrapper>
                <SocialSvgWrapper className={cls.tg_moving} href="https://t.me/guitarandorchestra" color="#2aabee">
                    <Telegram />
                </SocialSvgWrapper>
                <SocialSvgWrapper href="https://vk.com/artist/filippgoriainov" color="#0077FF">
                    <Vk />
                </SocialSvgWrapper>
                <SocialSvgWrapper color="transparent" className={cls.spotify_icon_wrapper} href="https://open.spotify.com/artist/676YDxdfj0g6e5deXEuXi0">
                    <Spotify />
                </SocialSvgWrapper>
            </div>
        </div>
    );
}
