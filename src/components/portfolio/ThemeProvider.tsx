import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeMode = "dark" | "colorful" | "professional";

const STORAGE_KEY = "jg-theme-mode";
const CLASS_MAP: Record<ThemeMode, string> = {
  dark: "",
  colorful: "theme-colorful",
  professional: "theme-professional",
};

type Ctx = { mode: ThemeMode; setMode: (m: ThemeMode) => void };
const ThemeContext = createContext<Ctx>({ mode: "dark", setMode: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  // Read persisted preference on mount (avoids SSR/hydration mismatch).
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (saved && saved in CLASS_MAP) setMode(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    Object.values(CLASS_MAP).forEach((c) => c && root.classList.remove(c));
    const cls = CLASS_MAP[mode];
    if (cls) root.classList.add(cls);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => root.classList.remove("theme-switching"), 650);
    return () => window.clearTimeout(t);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);