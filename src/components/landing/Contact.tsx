"use client";

import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";
import { elsewhereLinks, getContent } from "@/resources/content";
import styles from "./landing.module.css";
import { Reveal } from "./Reveal";

export function Contact() {
  const { language } = useLanguage();
  const content = getContent(language);
  const copy = content.translations.landing.contact;
  const [localPart, domain] = content.person.email.split("@");
  const mailLink = `mailto:${content.person.email}?subject=${encodeURIComponent(
    content.translations.landing.services.mailSubject,
  )}&body=${encodeURIComponent(copy.mailBody)}`;

  return (
    <section className={styles.contact} id="contact">
      <div>
        <Reveal as="p" className={styles.ask}>
          {copy.ask}
        </Reveal>
        <Reveal index={1}>
          <a className={styles.action} href={content.about.calendar.link}>
            {copy.cta}
            <span className={styles.arrow}>→</span>
          </a>
        </Reveal>
      </div>
      <div>
        <a className={styles.mail} href={mailLink}>
          {localPart}
          <wbr />@{domain}
        </a>
        <div className={styles.corners}>
          <span>{copy.languages}</span>
          <span>
            <Link href={content.contact.path}>{copy.form}</Link>
            {elsewhereLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
