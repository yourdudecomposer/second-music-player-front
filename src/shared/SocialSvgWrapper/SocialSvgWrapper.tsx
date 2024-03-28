import { AnchorHTMLAttributes, ReactNode, useMemo } from 'react';
import cls from './SocialSvgWrapper.module.scss';

interface SocialSvgWrapperProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children:ReactNode
    color:string
    href:string
    className?:string
}

export function SocialSvgWrapper({
    className, children, color, href,
}: SocialSvgWrapperProps) {
    const style = useMemo(() => ({ background: color }), [color]);
    return (
        <a target="_blank" href={href} style={style} className={`${cls.svg_wrapper} ${className}`} rel="noreferrer">
            {children}
        </a>
    );
}
