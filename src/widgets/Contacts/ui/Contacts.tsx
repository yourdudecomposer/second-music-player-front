import clsx from 'clsx';
import { ReactComponent as Vk } from '@/shared/icons/vk.svg';
import { ReactComponent as Youtube } from '@/shared/icons/youtube.svg';
import { ReactComponent as Telegram } from '@/shared/icons/telegram.svg';
import { SocialSvgWrapper } from '@/shared/SocialSvgWrapper/SocialSvgWrapper';
import cls from './Contacts.module.scss';

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    return (
        <div className={clsx(className, cls.div, 'plain_text_size')}>
            <a className={cls.mail_link} href="mailto:mail@mail.ru&body=привет?subject=вопрос">mailtomail@mail.ru</a>
            <div className={cls.social_wrapper}>
                <SocialSvgWrapper href="https://www.youtube.com/" color="red">
                    <Youtube />
                </SocialSvgWrapper>
                <SocialSvgWrapper href="https://www.youtube.com/" color="#0077FF">
                    <Vk />
                </SocialSvgWrapper>
                <SocialSvgWrapper className={cls.tg_moving} href="https://www.youtube.com/" color="#2aabee">
                    <Telegram />
                </SocialSvgWrapper>
                <SocialSvgWrapper href="https://www.youtube.com/" color="red">
                    <Vk />
                </SocialSvgWrapper>
            </div>
        </div>
    );
}
