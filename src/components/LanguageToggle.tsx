"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ToggleButton } from "@once-ui-system/core";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "fr" ? "en" : "fr";

  return (
    <ToggleButton
      label={nextLanguage.toUpperCase()}
      onClick={() => setLanguage(nextLanguage)}
      aria-label={nextLanguage === "fr" ? "Passer en français" : "Switch to English"}
    />
  );
}
