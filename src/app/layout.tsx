import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

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
                {children}
            </body>
        </html>
    );
}
