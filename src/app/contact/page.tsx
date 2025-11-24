"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import {
  Button,
  Column,
  Heading,
  Row,
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
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.contact.path}
        title={content.contact.title}
        description={content.contact.description}
      />
      <Column fillWidth gap="l">
        <Column gap="m">
          <Heading variant="display-strong-xl">{content.contact.title}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {content.contact.description}
          </Text>
          <Row paddingTop="m">
            <Button
              data-border="rounded"
              href="https://calendar.app.google/vsTDwGyn5oBUVkrf8"
              variant="primary"
              size="l"
              weight="strong"
              arrowIcon
            >
              {content.services.button?.bookACall || "Book a Call"}
            </Button>
          </Row>
        </Column>

        <ContactForm />
      </Column>
    </Column>
  );
}
