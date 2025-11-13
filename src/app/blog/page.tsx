import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, person } from "@/resources";
import { getContent } from "@/resources/content";
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  const contentFr = getContent("fr");
  const blogFr = contentFr.blog;
  const url = `${baseURL}${blogFr.path}`;
  const imageUrl = `${baseURL}/api/og/generate?title=${encodeURIComponent(blogFr.title)}`;

  const baseMetadata = Meta.generate({
    title: blogFr.title,
    description: blogFr.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blogFr.title)}`,
    path: blogFr.path,
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
      title: blogFr.title,
      description: blogFr.description,
      images: [imageUrl],
    },
    openGraph: {
      ...baseMetadata.openGraph,
      locale: "fr_FR",
      alternateLocale: "en_US",
    },
  };
}

export default function Blog() {
  const blog = getContent("en").blog; // Use English for display (client-side will switch)
  const blogFr = getContent("fr").blog;
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blogFr.title}
        description={blogFr.description}
        path={blogFr.path}
        image={`/api/og/generate?title=${encodeURIComponent(blogFr.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
