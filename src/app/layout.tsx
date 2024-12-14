/* eslint-disable react/jsx-no-useless-fragment */
import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode, Suspense } from 'react';
import { Metadata } from 'next';
import { Player } from '@/widgets/Player';
import clsx from 'clsx';
import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { InnerLayout } from '@/app/_InnerLayout';
import { LanguageProvider } from '@/features/LanguageSwitcher';
import Metrika from './Metrika';

const inter = Nunito({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Guitar Player',
    description: 'Music for Guitar and Orchestra by Goriainov Filipp',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: ReactNode;
}>) {
    return (
        <html lang="en">

            <body className={`${inter.className}`}>

                <Suspense fallback={<></>}>
                    <Metrika />
                </Suspense>
                <div className={clsx('player_wrapper', 'player_purple')}>
                    <LanguageProvider>
                        <Player />
                        <ArticleThemeProvider>
                            <InnerLayout>
                                {children}
                            </InnerLayout>
                        </ArticleThemeProvider>
                    </LanguageProvider>
                </div>
            </body>
        </html>
    );
}
