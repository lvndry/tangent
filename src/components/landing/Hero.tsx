"use client";

import { useEffect, useRef } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import styles from "./landing.module.css";
import { Reveal } from "./Reveal";

const wordWidthRatio = 1.14;
const phoneQuery = "(max-width: 900px)";

export function Hero() {
  const { language } = useLanguage();
  const content = getContent(language);
  const copy = content.translations.landing.hero;
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const word = wordRef.current;
    if (!word) return;

    const fitWord = () => {
      if (window.matchMedia(phoneQuery).matches) {
        word.style.fontSize = "";
        word.style.left = "";
        return;
      }
      word.style.fontSize = "100px";
      const naturalWidth = word.scrollWidth;
      const targetWidth = window.innerWidth * wordWidthRatio;
      word.style.fontSize = `${(100 * targetWidth) / naturalWidth}px`;
      word.style.left = `${-(targetWidth - window.innerWidth) / 2}px`;
    };

    fitWord();
    document.fonts.ready.then(fitWord);
    window.addEventListener("resize", fitWord);
    return () => window.removeEventListener("resize", fitWord);
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroCopy}>
        <Reveal as="p">{copy.sentence}</Reveal>
        <Reveal index={1}>
          <a className={styles.action} href={content.about.calendar.link}>
            {copy.cta}
            <span className={styles.arrow}>→</span>
          </a>
        </Reveal>
      </div>
      <h1 className={styles.heroWord} ref={wordRef} aria-label={content.person.firstName}>
        <span aria-hidden="true">{content.person.firstName}</span>
      </h1>
    </section>
  );
}
