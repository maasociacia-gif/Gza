import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'auto';

export const darkColors = {
  bg: '#0D1B2A', bgSecondary: '#152238',
  text: '#FFFFFF', textSub: 'rgba(255,255,255,0.5)',
  textMuted: 'rgba(255,255,255,0.25)', border: 'rgba(255,255,255,0.05)',
  borderStrong: 'rgba(255,255,255,0.12)', card: '#152238',
  cardHover: 'rgba(255,255,255,0.05)', accent: '#D81E36',
  shadow: '0 4px 24px rgba(0,0,0,0.5)', shadowStrong: '0 8px 32px rgba(0,0,0,0.7)',
  shadowRaised: '0 3px 0 rgba(140,0,20,0.8), 0 6px 16px rgba(220,20,60,0.45)',
};

export const lightColors = {
  bg: '#F2F5F8', bgSecondary: '#FFFFFF',
  text: '#0E1624', textSub: '#8E99A8',
  textMuted: '#8E99A8', border: 'rgba(14,22,36,0.08)',
  borderStrong: 'rgba(14,22,36,0.12)', card: '#FFFFFF',
  cardHover: 'rgba(14,22,36,0.04)', accent: '#D81E36',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.1)',
  shadowStrong: '0 4px 6px -1px rgba(0,0,0,0.14), 0 8px 16px -2px rgba(0,0,0,0.1)',
  shadowRaised: '0 3px 0 rgba(140,0,20,0.55), 0 6px 16px rgba(216,30,54,0.35)',
};

const GZA_CSS_VARS: Record<keyof typeof lightColors, string> = {
  bg: '--gza-page-bg',
  bgSecondary: '--gza-bg-secondary',
  text: '--gza-text-primary',
  textSub: '--gza-text-sub',
  textMuted: '--gza-text-muted',
  border: '--gza-border',
  borderStrong: '--gza-border-strong',
  card: '--gza-card-bg',
  cardHover: '--gza-card-hover',
  accent: '--gza-crimson',
  shadow: '--gza-shadow-card',
  shadowStrong: '--gza-shadow-card-strong',
  shadowRaised: '--gza-shadow-raised',
};

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  isDark: boolean;
  colors: typeof darkColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem('gza-theme') as Theme) || 'light'
  );
  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const isDark = theme === 'dark' || (theme === 'auto' && systemDark);
  const colors = isDark ? darkColors : lightColors;

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('gza-theme', t);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-gza-theme', isDark ? 'dark' : 'light');
    root.classList.toggle('dark', isDark);

    document.body.style.backgroundColor = colors.bg;
    document.body.style.color = colors.text;
    document.body.style.transition = 'background-color 0.3s, color 0.3s';

    (Object.entries(GZA_CSS_VARS) as [keyof typeof lightColors, string][]).forEach(
      ([key, cssVar]) => {
        root.style.setProperty(cssVar, colors[key]);
      }
    );
  }, [isDark, colors]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
