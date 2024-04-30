import { useEffect, useState } from 'react';

export const useHydration = () => {
    const [isHydrationDone, setIsHydrationDone] = useState(false);
    useEffect(() => {
        setIsHydrationDone(true);
    }, []);

    return isHydrationDone;
};
