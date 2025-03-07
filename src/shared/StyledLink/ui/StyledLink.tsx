'use client';

import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import cls from './StyledLink.module.scss';

interface StyledLinkProps extends LinkProps {
    className?:string
    text:string
}

export function StyledLink({ className, href, text }: StyledLinkProps) {
    return (
        <Link className={clsx(cls.link, className)} href={href}>
            {text}
        </Link>
    );
}
