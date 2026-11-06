import { baseURL, schema } from "@/resources";
import { getContent } from "@/resources/content";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const url = `${baseURL}${contentFr.team.path}`;
  const imageUrl = contentFr.team.image
    ? `${baseURL}${contentFr.team.image}`
    : `${baseURL}/api/og/generate?title=${encodeURIComponent(contentFr.team.title)}`;

  const baseMetadata = Meta.generate({
    title: contentFr.team.title,
    description: contentFr.team.description,
    baseURL: baseURL,
    path: contentFr.team.path,
    image: contentFr.team.image,
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
      title: contentFr.team.title,
      description: contentFr.team.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: url,
      type: "website",
      siteName: schema.name,
      title: contentFr.team.title,
      description: contentFr.team.description,
      locale: "fr_FR",
      alternateLocale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: contentFr.team.title,
        },
      ],
    },
  };
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
