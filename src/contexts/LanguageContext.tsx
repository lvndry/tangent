"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    // Check localStorage first
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      return savedLanguage;
    }

    // Detect browser language
    const browserLang = navigator.language || (navigator as any).userLanguage;
    const detectedLang = browserLang.startsWith("fr") ? "fr" : "en";
    localStorage.setItem("language", detectedLang);
    return detectedLang;
  });

  useEffect(() => {
    // Sync localStorage changes from other tabs/windows
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "language" && event.newValue && (event.newValue === "en" || event.newValue === "fr")) {
        setLanguageState(event.newValue as Language);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
