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
import Script from 'next/script';
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
                <Script id="metrika-counter" strategy="afterInteractive">
                    {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(${process.env.YM_CODE}, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
                </Script>
                <Suspense fallback={<></>}>
                    <Metrika num={process.env.YM_CODE || ''} />
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
