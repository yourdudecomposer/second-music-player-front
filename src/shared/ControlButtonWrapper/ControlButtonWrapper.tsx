import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './ControlButtonWrapper.module.scss';

interface ControlButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode
    className?:string
}

export function ControlButtonWrapper({
    className, children, ...props
}: ControlButtonWrapperProps) {
    return (
        <button type="button" className={`${cls.button} ${className} `} {...props}>
            {children}
        </button>
    );
}
