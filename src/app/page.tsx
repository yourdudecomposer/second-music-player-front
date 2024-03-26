import { Article } from '@/entities/Article/Article';
import { Contacts } from '@/widgets/Contacts';
import { ArticleThemeSwitcher } from '@/features/ThemeSwitcher';
import cls from './page.module.scss';

export default async function Home() {
    return (

        <div className={cls.page}>
            <ArticleThemeSwitcher />
            <Article className={cls.article} />
            <Contacts className={cls.contacts} />
        </div>
    );
}
