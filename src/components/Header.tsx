"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Line, Row, ToggleButton } from "@once-ui-system/core";

import { useLanguage } from "@/contexts/LanguageContext";
import { display, routes } from "@/resources";
import { getContent } from "@/resources/content";
import styles from "./Header.module.scss";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

function TimeDisplay({ timeZone, locale = "en-GB" }: TimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
}

export default TimeDisplay;

export function Header() {
  const pathname = usePathname() ?? "";
  const { language } = useLanguage();
  const content = getContent(language);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={`${styles.position} ${isScrolled ? styles.scrolled : ""}`}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/services"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/services"
                      label={content.services.label}
                      selected={pathname.startsWith("/services")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/services"
                      selected={pathname.startsWith("/services")}
                    />
                  </Row>
                </>
              )}
              {routes["/about-me"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about-me"
                      label={content.team.label}
                      selected={pathname.startsWith("/about-me")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/about-me"
                      selected={pathname.startsWith("/about-me")}
                    />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      label={content.contact.label}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="email"
                      href="/contact"
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <LanguageToggle />
              {display.themeSwitcher && <ThemeToggle />}
            </Row>
          </Row>
        </Row>
      </Row>
    </>
  );
}
