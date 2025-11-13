import { Projects } from "@/components/work/Projects";
import { about, baseURL, person } from "@/resources";
import { getContent } from "@/resources/content";
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const workFr = contentFr.work;
  const url = `${baseURL}${workFr.path}`;
  const imageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(workFr.title)}`;

  const baseMetadata = Meta.generate({
    title: workFr.title,
    description: workFr.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(workFr.title)}`,
    path: workFr.path,
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
      title: workFr.title,
      description: workFr.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      locale: "fr_FR",
      alternateLocale: "en_US",
    },
  };
}

export default function Work() {
  const work = getContent("en").work;
  const workFr = getContent("fr").work;

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={workFr.path}
        title={workFr.title}
        description={workFr.description}
        image={`/api/og/generate?title=${encodeURIComponent(workFr.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Projects />
    </Column>
  );
}
