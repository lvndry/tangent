import classNames from "classnames";
import Script from "next/script";

import { Footer, Header, Providers, RouteGuard } from "@/components";
import { LangSetter } from "@/components/LangSetter";
import { baseURL, dataStyle, effects, fonts, sameAs, schema, SEO_KEYWORDS, style } from "@/resources";
import { getContent } from "@/resources/content";
import {
  Background,
  Column,
  Flex,
  Meta,
  Opacity,
  RevealFx,
  Schema,
  SpacingToken,
} from "@once-ui-system/core";

import "@/resources/custom.css";
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const url = `${baseURL}${contentFr.home.path}`;
  const imageUrl = contentFr.home.image
    ? `${baseURL}${contentFr.home.image}`
    : `${baseURL}/api/og/generate?title=${encodeURIComponent(contentFr.home.title)}`;

  const baseMetadata = Meta.generate({
    title: contentFr.home.title,
    description: contentFr.home.description,
    baseURL: baseURL,
    path: contentFr.home.path,
    image: contentFr.home.image,
  });

  return {
    ...baseMetadata,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        "fr-FR": url,
        en: url,
        "en-US": url,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: contentFr.home.title,
      description: contentFr.home.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: url,
      type: "website",
      siteName: schema.name,
      locale: "fr_FR",
      alternateLocale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: contentFr.home.title,
        },
      ],
    },
    keywords: SEO_KEYWORDS,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                const root = document.documentElement;
                const defaultTheme = 'system';

                // Set defaults from config
                const config = ${JSON.stringify({
                  brand: style.brand,
                  accent: style.accent,
                  neutral: style.neutral,
                  solid: style.solid,
                  "solid-style": style.solidStyle,
                  border: style.border,
                  surface: style.surface,
                  transition: style.transition,
                  scaling: style.scaling,
                  "viz-style": dataStyle.variant,
                })};

                // Apply default values
                Object.entries(config).forEach(([key, value]) => {
                  root.setAttribute('data-' + key, value);
                });

                // Resolve theme
                const resolveTheme = (themeValue) => {
                  if (!themeValue || themeValue === 'system') {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  return themeValue;
                };

                // Apply saved theme
                const savedTheme = localStorage.getItem('data-theme');
                const resolvedTheme = resolveTheme(savedTheme);
                root.setAttribute('data-theme', resolvedTheme);

                // Apply any saved style overrides
                const styleKeys = Object.keys(config);
                styleKeys.forEach(key => {
                  const value = localStorage.getItem('data-' + key);
                  if (value) {
                    root.setAttribute('data-' + key, value);
                  }
                });
              } catch (e) {
                console.error('Failed to initialize theme:', e);
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            })();
          `,
          }}
        />
      </head>
      <Providers>
        <LangSetter />
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <Schema
            as="organization"
            baseURL={baseURL}
            path="/"
            title={schema.name}
            description={schema.description}
            sameAs={[
              sameAs.linkedin,
            ].filter(Boolean)}
          />
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as Opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as Opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as Opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>
          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
