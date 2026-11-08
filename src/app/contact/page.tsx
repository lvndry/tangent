"use client";

import styles from "@/components/landing/landing.module.css";
import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import { Column, Schema } from "@once-ui-system/core";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  const { language } = useLanguage();
  const content = getContent(language);
  const copy = content.translations.landing.contact;

  return (
    <Column
      className={styles.root}
      maxWidth="m"
      gap="xl"
      paddingX="l"
      paddingTop="128"
      paddingBottom="64"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.contact.path}
        title={content.contact.title}
        description={content.contact.description}
        image={content.contact.image ? `${baseURL}${content.contact.image}` : undefined}
      />
      <Column fillWidth gap="l">
        <div>
          <h1 className={styles.pageTitle}>{copy.pageTitle}</h1>
          <p className={styles.pageLede}>{copy.pageLede}</p>
          <a className={styles.action} href={content.about.calendar.link}>
            {copy.cta}
            <span className={styles.arrow}>→</span>
          </a>
        </div>
        <ContactForm />
      </Column>
    </Column>
  );
}
