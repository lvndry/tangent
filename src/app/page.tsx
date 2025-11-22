import { baseURL, schema, SEO_KEYWORDS } from "@/resources";
import { getContent } from "@/resources/content";
import { Meta } from "@once-ui-system/core";
import { HomeClient } from "./HomeClient";

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

export default function Home() {
  return <HomeClient />;
}
