import { ReactComponent as GMail } from '@/shared/icons/gmail.svg';
import { ReactComponent as Insta } from '@/shared/icons/instagram.svg';
import Typography from '@/shared/Typography/Typography';
import clsx from 'clsx';
import cls from './Contacts.module.scss';

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    return (
        <div className={clsx(className, cls.div, 'plain_text_size')}>

            <div className={cls.contact_wrapper}>
                <Insta />
                <Typography text="see more guitar videos" />
            </div>
            <div className={cls.contact_wrapper}>
                <GMail />
                <Typography text="contact me" />
            </div>
        </div>
    );
}
