/* eslint-disable max-len */
import Typography from '@/shared/Typography/Typography';
import cls from './Article.module.scss';

const text = {
    parOne: "Hey there! Welcome to my website, where you can dive into the world of my music compositions for guitar and orchestra. I'm so excited to share my passion for creating beautiful pieces that bring the best of both instruments to life.",
    parTwo: "Take a listen to some of my compositions through the music player and let the melodies transport you to a world of emotions and imagination. I've poured my heart and soul into each piece, hoping to create music that resonates with you and brings a smile to your face.",
    parThree: "Thank you for stopping by and supporting my musical journey. I'm thrilled to share my creations with you and I hope they bring a little bit of joy and inspiration to your day. Enjoy the music and feel free to reach out with any questions or feedback. Happy listening!",

};

interface ArticleProps {
    className?:string
}

export function Article({ className }: ArticleProps) {
    return (
        <div className={className}>
            <Typography className={cls.title} text="Welcome" />
            <div className={cls.text}>
                {/* eslint-disable-next-line max-len */}
                <Typography text={text.parOne} />
                <Typography text={text.parTwo} />
                <Typography text={text.parThree} />
            </div>
        </div>
    );
}
