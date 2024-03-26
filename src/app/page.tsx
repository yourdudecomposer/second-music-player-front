import { Article } from '@/entities/Article/Article';
import { Contacts } from '@/widgets/Contacts';
import cls from './page.module.scss';

export default async function Home() {
    return (

        <>
            <Article className={cls.article} />
            <Contacts className={cls.contacts} />
        </>
    );
}
