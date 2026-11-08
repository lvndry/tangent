import classNames from "classnames";
import { cookies, headers } from "next/headers";
import Script from "next/script";

import { Footer, Header, Providers, RouteGuard } from "@/components";
import {
  baseURL,
  dataStyle,
  fonts,
  sameAs,
  schema,
  SEO_KEYWORDS,
  style,
} from "@/resources";
import { getContent } from "@/resources/content";
import { resolveLanguage } from "@/contexts/language";
import { Column, Flex, Meta, Schema } from "@once-ui-system/core";

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
  const [cookieStore, headerStore] = await Promise.all([cookies(), headers()]);
  const language = resolveLanguage(
    cookieStore.get("language")?.value,
    headerStore.get("accept-language"),
  );

  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang={language}
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
                root.classList.add('js');

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

                root.setAttribute('data-theme', 'dark');

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
      <Providers initialLanguage={language}>
        <Column
          as="body"
          fillWidth
          style={{ minHeight: "100vh", background: "var(--ground)" }}
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
            sameAs={[sameAs.linkedin].filter(Boolean)}
          />
          <Header />
          <Flex as="main" fillWidth flex={1} minHeight="0">
            <RouteGuard>{children}</RouteGuard>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
