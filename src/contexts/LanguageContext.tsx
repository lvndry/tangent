"use client";

import { createContext, ReactNode, useContext, useSyncExternalStore } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Store subscription callbacks to trigger updates when language changes in same window
let languageCallbacks: Set<() => void> = new Set();

function getLanguageFromStorage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLanguage = localStorage.getItem("language") as Language | null;
  if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
    return savedLanguage;
  }

  // Detect browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const detectedLang = browserLang.startsWith("fr") ? "fr" : "en";
  localStorage.setItem("language", detectedLang);
  return detectedLang;
}

function subscribeToLanguage(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  languageCallbacks.add(callback);

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === "language") {
      callback();
    }
  };

  window.addEventListener("storage", handleStorageChange);
  return () => {
    languageCallbacks.delete(callback);
    window.removeEventListener("storage", handleStorageChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore to properly sync with localStorage
  // This ensures server and client both start with "en" to prevent hydration mismatch
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageFromStorage,
    () => "en" as Language // Server-side fallback - always "en" to match initial client render
  ) as Language;

  const setLanguage = (lang: Language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      // Manually trigger all subscription callbacks since StorageEvent doesn't fire for same-window changes
      languageCallbacks.forEach((callback) => callback());
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
