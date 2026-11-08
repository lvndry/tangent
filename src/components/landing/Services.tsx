"use client";

import { useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import styles from "./landing.module.css";
import { Reveal } from "./Reveal";

export function Services() {
  const { language } = useLanguage();
  const content = getContent(language);
  const copy = content.translations.landing.services;
  const [selectedBySubsection, setSelectedBySubsection] = useState<Record<number, string>>({});

  const buildMailLink = (topic: string) => {
    const subject = `${copy.mailSubject}: ${topic}`;
    const body = `${copy.mailGreeting}\n\n${copy.mailTopic}: ${topic}\n\n`;
    return `mailto:${content.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={styles.section} id="services">
      <Reveal as="h2" className={styles.heading}>
        {copy.title}
      </Reveal>
      {copy.subsections.map((subsection, subsectionIndex) => {
        const selectedKey = selectedBySubsection[subsectionIndex];
        const select = (key: string) =>
          setSelectedBySubsection((current) => ({ ...current, [subsectionIndex]: key }));
        const selectedItem = subsection.groups
          .flatMap((group, groupIndex) =>
            group.items.map((item, itemIndex) => ({ item, key: `${groupIndex}-${itemIndex}` })),
          )
          .find((entry) => entry.key === selectedKey)?.item;

        return (
          <div className={styles.subsection} key={subsection.title}>
            <Reveal as="h3" className={styles.subhead}>
              {subsection.title}
            </Reveal>
            <div className={styles.services}>
              {subsection.groups.map((group, groupIndex) => (
                <Reveal className={styles.group} index={groupIndex} key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item, itemIndex) => {
                      const key = `${groupIndex}-${itemIndex}`;
                      const isSelected = selectedKey === key;
                      return (
                        <li key={item.name}>
                          <button
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => select(key)}
                            onMouseEnter={() => select(key)}
                            onFocus={() => select(key)}
                          >
                            {item.name}
                          </button>
                          {isSelected && (
                            <p className={styles.inline}>
                              {item.text}
                              <br />
                              <a href={buildMailLink(item.name)}>{copy.action} →</a>
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <p className={styles.summary}>{group.summary}</p>
                </Reveal>
              ))}
              <aside
                className={`${styles.detail} ${selectedItem ? "" : styles.detailEmpty}`}
                aria-live="polite"
              >
                <div className={styles.detailBody} key={selectedKey ?? "empty"}>
                  <p>{selectedItem ? selectedItem.text : copy.placeholder}</p>
                  {selectedItem && (
                    <a className={styles.action} href={buildMailLink(selectedItem.name)}>
                      {copy.action}
                      <span className={styles.arrow}>→</span>
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </div>
        );
      })}
    </section>
  );
}
