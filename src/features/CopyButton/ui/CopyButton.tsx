import { ReactComponent as Copy } from '@/shared/icons/copy.svg';
import { ControlButtonWrapper } from '@/shared/ControlButtonWrapper/ControlButtonWrapper';
import clsx from 'clsx';
import { Tooltip } from '@/shared/Tooltip';
import { useEffect, useState } from 'react';
import ClientOnlyPortal from '@/shared/utils/portals/ClientOnlyPortal';
import { useLanguage } from '@/features/LanguageSwitcher';
import cls from './CopyButton.module.scss';

interface CopyButtonProps {
    className?:string
}

export function CopyButton({ className }: CopyButtonProps) {
    const [open, setOpen] = useState(false);
    const { language } = useLanguage();
    const copyHandler = () => {
        navigator.clipboard.writeText(window.location.href);
        setOpen(!open);
    };
    useEffect(() => {
        let id: ReturnType<typeof setTimeout>;
        if (open) {
            id = setTimeout(() => {
                setOpen(false);
            }, 1000);
        }
        return () => {
            clearTimeout(id);
        };
    }, [open]);

    return (
        <>
            {open
        && (
            <ClientOnlyPortal selector="body">
                <Tooltip className={cls.tooltip} text={language === 'en' ? 'copied!' : 'скопировано!'} />
            </ClientOnlyPortal>
        )}
            <ControlButtonWrapper onClick={copyHandler} className={clsx(className, cls.button)}>
                <Copy />
            </ControlButtonWrapper>
        </>
    );
}
