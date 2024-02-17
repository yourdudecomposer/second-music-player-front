import { ThemeProvider } from '@/features/ThemeSwitcher';
import { MainPage } from '@/pages/MainPage';
import { Player } from '@/widgets/Player';

export default function Home() {
    return (

        <ThemeProvider>
            <MainPage>
                <Player />
            </MainPage>
        </ThemeProvider>
    );
}
