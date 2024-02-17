import cls from './RandomButton.module.scss';

interface RandomButtonProps {
    className?:string
}

export function RandomButton({ className }: RandomButtonProps) {
    return (
        <div className={`${className} ${cls.div}`} />
    );
}
