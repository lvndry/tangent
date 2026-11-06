"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import { IconButton, Row, Text } from "@once-ui-system/core";
import styles from "./Footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const content = getContent(language);
  const footerText =
    language === "fr"
      ? " / Conseil indépendant en IA et ingénierie"
      : " / Independent AI & engineering advisory";

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{content.person.name}</Text>
          <Text onBackground="neutral-weak">{footerText}</Text>
        </Text>
        <Row gap="16">
          {content.social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
}
