import {
    useRef, useEffect, useState, ReactElement,
} from 'react';
import { createPortal } from 'react-dom';

type ClientOnlyPortalProps = {
  selector: string;
  children: ReactElement;
}

export default function ClientOnlyPortal({ selector, children }: ClientOnlyPortalProps) {
    const ref = useRef<HTMLElement | null>(null);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        ref.current = document.querySelector(selector);
        setMounted(true);
    }, [selector]);

    return mounted ? createPortal(children, ref.current!) : null;
}
