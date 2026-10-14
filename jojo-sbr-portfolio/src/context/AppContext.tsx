import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, TRANSLATIONS } from '../data/portfolioData';

type Theme = 'dark' | 'light';

interface AppContextProps {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: typeof TRANSLATIONS['th'];
  goldenOverlay: boolean;
  toggleGoldenOverlay: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const THEME_STORAGE_KEY = 'sbr_portfolio_theme_v1';
const LANG_STORAGE_KEY = 'sbr_portfolio_lang_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'dark';
    }
  });

  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY) as Language | null;
      return saved === 'en' || saved === 'th' ? saved : 'th';
    } catch {
      return 'th';
    }
  });

  const [goldenOverlay, setGoldenOverlay] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }, [lang]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLangState((prev) => (prev === 'th' ? 'en' : 'th'));
  const setLang = (l: Language) => setLangState(l);
  const toggleGoldenOverlay = () => setGoldenOverlay((prev) => !prev);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        lang,
        toggleLang,
        setLang,
        t: TRANSLATIONS[lang],
        goldenOverlay,
        toggleGoldenOverlay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
