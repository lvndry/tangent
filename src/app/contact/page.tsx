"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import {
  Column,
  Heading,
  Schema,
  Text,
} from "@once-ui-system/core";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  const { language } = useLanguage();
  const content = getContent(language);
  
  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.contact.path}
        title={content.contact.title}
        description={content.contact.description}
        image={content.contact.image ? `${baseURL}${content.contact.image}` : undefined}
      />
      <Column fillWidth gap="l">
        <Column gap="m">
          <Heading variant="display-strong-xl">{content.contact.title}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {content.contact.description}
          </Text>
        </Column>

        <ContactForm />
      </Column>
    </Column>
  );
}
