import Typography from '@/shared/Typography/Typography';
import cls from './Article.module.scss';

interface ArticleProps {
    text:string
}

export function Article({ text }:ArticleProps) {
    return (
        <Typography isPlayerText={false} className={cls.article_text} text={text} />
    );
}
