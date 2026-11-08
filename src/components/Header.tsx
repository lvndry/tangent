"use client";

import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import styles from "./Header.module.scss";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const copy = getContent(language).translations.landing.nav;
  const nextLanguage = language === "fr" ? "en" : "fr";

  return (
    <header className={styles.bar}>
      <Link href="/" className={styles.brand} aria-label={copy.home}>
        <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <defs>
            <mask id="header-mark-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
              <rect width="100" height="100" fill="#fff" />
              <path d="M8 62C40 62 60 38 92 38" stroke="#000" strokeWidth="26" />
            </mask>
          </defs>
          <path
            mask="url(#header-mark-cut)"
            d="M38 8C38 40 62 60 62 92"
            stroke="#34d399"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M8 62C40 62 60 38 92 38"
            stroke="#34d399"
            strokeWidth="14"
            strokeLinecap="round"
          />
        </svg>
        Tangent
      </Link>
      <nav className={styles.right} aria-label="Main">
        <Link className={styles.link} href="/#services">
          {copy.services}
        </Link>
        <Link className={styles.link} href="/#about">
          {copy.about}
        </Link>
        <Link className={styles.link} href="/#contact">
          {copy.contact}
        </Link>
        <button
          type="button"
          className={styles.language}
          onClick={() => setLanguage(nextLanguage)}
          aria-label={nextLanguage === "fr" ? "Passer en français" : "Switch to English"}
        >
          {nextLanguage.toUpperCase()}
        </button>
      </nav>
    </header>
  );
}
