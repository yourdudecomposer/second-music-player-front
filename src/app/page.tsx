import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { Article } from '@/entities/Article/Article';

export default async function Home() {
    return (
        <ArticleThemeProvider>
            <Article />
        </ArticleThemeProvider>
    );
}
