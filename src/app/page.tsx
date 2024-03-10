import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { Article } from '@/widgets/Article';
import { Player } from '@/widgets/Player';
import clsx from 'clsx';
import cls from './page.module.scss';

export default async function Home() {
    return (
        <div className={clsx(cls.wrapper, 'player_purple')}>
            <Player />
            <ArticleThemeProvider>
                <Article />
            </ArticleThemeProvider>

        </div>
    );
}
