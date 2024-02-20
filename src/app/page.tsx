import { ThemeProvider } from '@/features/ThemeSwitcher';
import { MainPage } from '@/pages/MainPage';
import { ITrack } from '@/types';
import { Player } from '@/widgets/Player';

export default async function Home() {
    return (

        <ThemeProvider>
            <MainPage>
                <Player />
            </MainPage>
        </ThemeProvider>
    );
}
