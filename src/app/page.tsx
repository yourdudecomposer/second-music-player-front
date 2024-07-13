import { Article } from '@/entities/Article/Article';
import { Contacts } from '@/widgets/Contacts';
import { ArticleThemeSwitcher } from '@/features/ThemeSwitcher';
import { LanguageSwitcher } from '@/features/LanguageSwitcher';
import cls from './page.module.scss';

export default function Home() {
    return (
        <div className={cls.page}>
            <div
                className={cls.settings}
            >
                <LanguageSwitcher />
                <ArticleThemeSwitcher />

            </div>
            <Article className={cls.article} />
            <Contacts className={cls.contacts} />
        </div>
    );
}
