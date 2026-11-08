"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import styles from "./landing.module.css";
import { Reveal } from "./Reveal";

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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
