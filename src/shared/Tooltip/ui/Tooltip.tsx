import Typography from '@/shared/Typography/Typography';
import cls from './Tooltip.module.scss';

interface TooltipProps {
    text:string;
    className?:string
}

export function Tooltip({ text, className }: TooltipProps) {
    return (
        <div className={`${className} ${cls.div}`}>
            <Typography text={text} />
        </div>
    );
}
