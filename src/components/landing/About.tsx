"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import styles from "./landing.module.css";
import { Reveal } from "./Reveal";

const logoToken = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN ?? "";

function logoUrl(domain: string) {
  return `https://img.logo.dev/${domain}?token=${logoToken}&size=96&format=png&retina=true`;
}

export function About() {
  const { language } = useLanguage();
  const copy = getContent(language).translations.landing.about;

  return (
    <section className={styles.about} id="about">
      <h2 className={styles.aboutTitle}>
        <span>{copy.first}</span>
        <span>{copy.last}</span>
      </h2>
      <div className={styles.aboutText}>
        {copy.passages.map((passage) => (
          <Reveal as="p" key={passage.text}>
            {passage.text}
            <small>{passage.note}</small>
            {"logos" in passage && passage.logos ? (
              <span className={styles.aboutLogos}>
                {passage.logos.map((logo) => (
                  <img
                    key={logo.domain}
                    src={logoUrl(logo.domain)}
                    alt={logo.name}
                    title={logo.name}
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                ))}
              </span>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
