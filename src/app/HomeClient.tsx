"use client";

import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Hero } from "@/components/landing/Hero";
import styles from "@/components/landing/landing.module.css";
import { Services } from "@/components/landing/Services";
import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import { Schema } from "@once-ui-system/core";

export function HomeClient() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <div className={styles.root}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.home.path}
        title={content.home.title}
        description={content.home.description}
        image={`/api/og/generate?title=${encodeURIComponent(content.home.title)}`}
      />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
