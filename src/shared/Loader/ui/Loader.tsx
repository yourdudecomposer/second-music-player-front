import cls from './Loader.module.scss';

interface LoaderProps {
    className?:string
}

export function Loader({ className }: LoaderProps) {
    return <div className={`${className} ${cls.loader}`} />;
}
