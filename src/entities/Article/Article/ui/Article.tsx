'use client';

/* eslint-disable max-len */
import Typography from '@/shared/Typography/Typography';
import clsx from 'clsx';
import { useLanguage } from '@/features/LanguageSwitcher';
import { Skeleton } from '@/shared/Skeleton';
import { useHydration } from '@/shared/utils/useHydration/useHydration';
import cls from './Article.module.scss';

const text = {
    en: {
        parOne: "Hey there! Welcome to my website, where you can dive into the world of my music compositions for guitar and orchestra. I'm so excited to share my passion for creating beautiful pieces that bring the best of both instruments to life.",
        parTwo: "Take a listen to some of my compositions through the music player and let the melodies transport you to a world of emotions and imagination. I've poured my heart and soul into each piece, hoping to create music that resonates with you and brings a smile to your face.",
        parThree: "Thank you for stopping by and supporting my musical journey. I'm thrilled to share my creations with you and I hope they bring a little bit of joy and inspiration to your day. Enjoy the music and feel free to reach out with any questions or feedback. Happy listening!",

    },
    ru: {
        parOne: 'Привет! Добро пожаловать на мой сайт, где вы сможете окунуться в мир моих музыкальных произведений для гитары с оркестром. Я так рад поделиться своей страстью к созданию прекрасных произведений, которые воплощают в жизнь лучшее от обоих инструментов.',
        parTwo: "Take a listen to some of my compositions through the music player and let the melodies transport you to a world of emotions and imagination. I've poured my heart and soul into each piece, hoping to create music that resonates with you and brings a smile to your face.",
        parThree: "Thank you for stopping by and supporting my musical journey. I'm thrilled to share my creations with you and I hope they bring a little bit of joy and inspiration to your day. Enjoy the music and feel free to reach out with any questions or feedback. Happy listening!",

    },
};

interface ArticleProps {
    className?:string
}

export function Article({ className }: ArticleProps) {
    const { language } = useLanguage();
    const isHydrationDone = useHydration();
    if (!isHydrationDone) {
        return (
            <div className={cls.skeleton_container}>
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
                <Skeleton className={cls.skeleton} />
            </div>
        );
    }
    return (
        <div className={className}>

            <Typography className={cls.title} text="Welcome" />
            <div className={clsx(cls.text, 'plain_text_size')}>
                {/* eslint-disable-next-line max-len */}
                <Typography text={text[language].parOne} />
                <Typography text={text[language].parTwo} />
                <Typography text={text[language].parThree} />
            </div>
        </div>
    );
}
