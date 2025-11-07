"use client";

import { ToggleButton, useTheme } from "@once-ui-system/core";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Derive current theme from the theme prop, with fallback for SSR
  const currentTheme = theme || (typeof document !== "undefined" 
    ? document.documentElement.getAttribute("data-theme") || "light"
    : "light");
  
  const icon = currentTheme === "dark" ? "light" : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} mode`}
    />
  );
};
