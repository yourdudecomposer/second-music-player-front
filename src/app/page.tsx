import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { Article } from '@/widgets/Article';

export default async function Home() {
    return (
        <ArticleThemeProvider>
            <Article />
        </ArticleThemeProvider>
    );
}
