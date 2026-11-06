import { baseURL, schema } from "@/resources";
import { getContent } from "@/resources/content";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const url = `${baseURL}${contentFr.contact.path}`;
  const imageUrl = contentFr.contact.image
    ? `${baseURL}${contentFr.contact.image}`
    : `${baseURL}/api/og/generate?title=${encodeURIComponent(contentFr.contact.title)}`;

  const baseMetadata = Meta.generate({
    title: contentFr.contact.title,
    description: contentFr.contact.description,
    baseURL: baseURL,
    path: contentFr.contact.path,
    image: contentFr.contact.image,
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
      title: contentFr.contact.title,
      description: contentFr.contact.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      url: url,
      type: "website",
      siteName: schema.name,
      title: contentFr.contact.title,
      description: contentFr.contact.description,
      locale: "fr_FR",
      alternateLocale: "en_US",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: contentFr.contact.title,
        },
      ],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
