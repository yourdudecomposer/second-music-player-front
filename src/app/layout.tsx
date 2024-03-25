import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Player } from '@/widgets/Player';
import clsx from 'clsx';
import { ArticleThemeProvider } from '@/features/ThemeSwitcher';
import { InnerLayout } from '@/widgets/InnerLayout';

const inter = Nunito({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'title',
    description: 'description',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                <div className={clsx('player_wrapper', 'player_purple')}>
                    <Player />
                    <ArticleThemeProvider>
                        <InnerLayout>
                            {children}
                        </InnerLayout>
                    </ArticleThemeProvider>
                </div>
            </body>
        </html>
    );
}
