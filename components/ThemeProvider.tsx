"use client";

import { createContext, useContext, useEffect } from "react";
import { ThemeConfig } from "@/config/types";

interface ThemeContextValue {
  theme: ThemeConfig;
  slug: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  theme: ThemeConfig;
  slug: string;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, slug, children }: ThemeProviderProps) {
  useEffect(() => {
    // Apply theme via data attribute for CSS targeting
    document.documentElement.setAttribute("data-theme", slug);

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [slug]);

  return (
    <ThemeContext.Provider value={{ theme, slug }}>
      {children}
    </ThemeContext.Provider>
  );
}
