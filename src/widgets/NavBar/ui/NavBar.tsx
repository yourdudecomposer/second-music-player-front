import cls from './NavBar.module.scss';

interface NavBarProps {
    className?:string
}

export function NavBar({ className }: NavBarProps) {
    return (
        <div className={`${className} ${cls.div}`}>
            NavBar
        </div>
    );
}
