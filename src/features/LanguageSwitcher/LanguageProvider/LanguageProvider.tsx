'use client';

import {
    ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';

type Language = null |'ru' | 'en'

// eslint-disable-next-line
export const LanguageContext = createContext<{language: Language, toggleLanguage:()=>void}>({ language: null, toggleLanguage: () => { } });

export function LanguageProvider({
    children,
}: {
    children: ReactNode;
  }) {
    const [language, setLanguage] = useState<Language>(null);

    useEffect(() => {
        if (navigator.language.includes('ru')) setLanguage('ru');
        else { setLanguage('en'); }
    }, []);
    const toggleLanguage = useCallback(() => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    }, [language]);

    const contextValue = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage]);
    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const { language, toggleLanguage } = useContext(LanguageContext);
    return { language, toggleLanguage };
}
