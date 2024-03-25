import { StyledLink } from '@/shared/StyledLink';
import Typography from '@/shared/Typography/Typography';
import Image from 'next/image';
import cls from './page.module.scss';

export default async function Home() {
    return (
        <>
            <Typography className={cls.title} text="Welcome" />
            <div className={cls.text_and_photo_wrapper}>
                <div className={cls.left_side}>
                    {/* eslint-disable-next-line max-len */}
                    <Typography className={cls.welcome_text} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni atque cupiditate odit rem minus debitis libero labore soluta. Sunt hic incidunt facilis quasi dolorem, ut enim ipsa nam recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni atque cupiditate odit rem minus debitis libero labore soluta. Sunt hic incidunt facilis quasi dolorem, ut enim ipsa nam recusandae?" />
                    <ul className={cls.links}>

                        <li>
                            <StyledLink text="Check the dev CV" href="/dev" />
                        </li>
                        <li>
                            <StyledLink text="Check the mus CV" href="/mus" />
                        </li>
                    </ul>
                </div>
                <div className={cls.right_side}>
                    <div className={cls.image_wrapper}>

                        <Image fill src="/cover_url_1.jpg" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
}
