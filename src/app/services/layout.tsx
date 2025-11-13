import { baseURL, SEO_KEYWORDS } from "@/resources";
import { getContent } from "@/resources/content";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const url = `${baseURL}${contentFr.services.path}`;
  const imageUrl = contentFr.services.image
    ? `${baseURL}${contentFr.services.image}`
    : `${baseURL}/api/og/generate?title=${encodeURIComponent(contentFr.services.title)}`;

  const baseMetadata = Meta.generate({
    title: contentFr.services.title,
    description: contentFr.services.description,
    baseURL: baseURL,
    path: contentFr.services.path,
    image: contentFr.services.image,
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
      title: contentFr.services.title,
      description: contentFr.services.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: contentFr.services.title,
      description: contentFr.services.description,
      locale: "fr_FR",
      alternateLocale: "en_US",
    },
    keywords: SEO_KEYWORDS,
  };
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
