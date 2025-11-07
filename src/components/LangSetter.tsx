"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

export function LangSetter() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  return null;
}

