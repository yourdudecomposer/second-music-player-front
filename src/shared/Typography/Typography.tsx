import cls from './Typography.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span'
interface TypographyProps {
    text:string
    isPlayerText?: boolean
    as?:TagType
    className?:string
}

export default function Typography({
    text, as: CustomTag = 'p', className, isPlayerText = false,
}: TypographyProps) {
    return (

        <CustomTag className={`${className} ${isPlayerText ? cls.player_style : cls.article_style}`}>{text}</CustomTag>
    );
}
