"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { elsewhereLinks, getContent } from "@/resources/content";
import styles from "./Footer.module.scss";

export function Footer() {
  const { language } = useLanguage();
  const content = getContent(language);
  const copy = content.translations.landing.footer;
  const serviceNames = content.translations.landing.services.subsections.flatMap((subsection) =>
    subsection.groups.map((group) => group.title),
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <b className={styles.title}>{copy.servicesTitle}</b>
          {serviceNames.map((name) => (
            <span key={name}>
              {name}
              <br />
            </span>
          ))}
        </div>
        <div className={styles.column}>
          <b className={styles.title}>{copy.writeTitle}</b>
          <a href={`mailto:${content.person.email}`}>{content.person.email}</a>
        </div>
        <div className={styles.column}>
          <b className={styles.title}>{copy.elsewhereTitle}</b>
          {elsewhereLinks.map((link) => (
            <span key={link.name}>
              <a href={link.href}>{link.name}</a>
              <br />
            </span>
          ))}
        </div>
        <div className={styles.column}>
          <b className={styles.title}>{copy.languagesTitle}</b>
          {copy.languages.map((name) => (
            <span key={name}>
              {name}
              <br />
            </span>
          ))}
        </div>
      </div>
      <div />
      <div>
        <svg
          className={styles.wordmark}
          viewBox="0 0 1000 250"
          role="img"
          aria-label={content.person.firstName}
        >
          <text
            x="0"
            y="238"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-heading), sans-serif"
            fontWeight="800"
            fontSize="290"
            fill="currentColor"
            style={{ fontStretch: "150%", textTransform: "uppercase" }}
          >
            {content.person.firstName}
          </text>
        </svg>
        <p className={styles.legal}>
          © {currentYear} {content.person.name}
        </p>
      </div>
    </footer>
  );
}
