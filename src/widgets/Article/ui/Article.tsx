'use client';

import Typography from '@/shared/Typography/Typography';
import { ArticleThemeSwitcher, useArticleTheme } from '@/features/ThemeSwitcher';
import cls from './Article.module.scss';

// interface ArticleProps {
//     className?:string
// }

// eslint-disable-next-line max-len
const articleText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sed veniam mollitia quod placeat reiciendis autem natus, non hic id laborum adipisci omnis blanditiis molestias, perspiciatis praesentium consectetur voluptatum sapiente';

export function Article() {
    const { theme } = useArticleTheme();

    return (
        <div className={`${cls.div} ${theme}`}>
            <Typography isPlayerText={false} text={articleText} />
            <ArticleThemeSwitcher />
        </div>
    );
}
