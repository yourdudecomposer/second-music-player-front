import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { Article } from '@/widgets/Article';
import { Player } from '@/widgets/Player';

export default async function Home() {
    return (
        <>
            <Player />
            <ArticleThemeProvider>
                <Article />
            </ArticleThemeProvider>

        </>
    );
}
