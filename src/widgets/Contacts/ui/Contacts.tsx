import { ReactComponent as GMail } from '@/shared/icons/gmail.svg';
import { ReactComponent as Insta } from '@/shared/icons/instagram.svg';
import Typography from '@/shared/Typography/Typography';
import cls from './Contacts.module.scss';

interface ContactsProps {
    className?: string
}

export function Contacts({ className }: ContactsProps) {
    return (
        <div className={`${className} ${cls.div}`}>

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
