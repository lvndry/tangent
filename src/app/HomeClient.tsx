"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import { Button, Card, Column, Grid, Heading, Line, Row, Schema, Text } from "@once-ui-system/core";

export function HomeClient() {
  const { language } = useLanguage();
  const content = getContent(language);
  const t = content.translations.homepage;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.home.path}
        title={content.home.title}
        description={content.home.description}
        image={`/api/og/generate?title=${encodeURIComponent(content.home.title)}`}
      />
      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <Column fillWidth horizontal="center" gap="16" paddingBottom="16">
            <Text variant="label-default-s" onBackground="brand-medium">
              {t.eyebrow}
            </Text>
            <Heading wrap="balance" variant="display-strong-l">
              {content.home.headline}
            </Heading>
          </Column>
          <Column fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {content.home.subline}
            </Text>
          </Column>
          <Row paddingTop="12" horizontal="center" gap="m" s={{ direction: "column" }}>
            <Row gap="m" s={{ direction: "column", fillWidth: true }}>
              <Button
                data-border="rounded"
                href={content.services.path}
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                {t.buttons.viewServices}
              </Button>
              <Button
                data-border="rounded"
                href="https://calendar.app.google/vsTDwGyn5oBUVkrf8"
                variant="secondary"
                size="m"
                weight="strong"
                arrowIcon
              >
                {t.buttons.getInTouch}
              </Button>
            </Row>
          </Row>
        </Column>
      </Column>

      {/* Intro */}
      <Column fillWidth>
        <Column fillWidth gap="m" paddingY="l">
          <Heading as="h2" variant="display-strong-m">
            {t.introTitle}
          </Heading>
          {t.introText.map((paragraph) => (
            <Text key={paragraph} variant="body-default-l" onBackground="neutral-weak">
              {paragraph}
            </Text>
          ))}
        </Column>
      </Column>

      {/* Services Overview */}
      <Column fillWidth>
        <Column fillWidth gap="l" paddingY="l">
          <Heading as="h2" variant="display-strong-m">
            {t.servicesTitle}
          </Heading>
          <Grid fillWidth columns="2" s={{ columns: 1 }} gap="l">
            {content.services.services.map((service) => (
              <Card
                key={service.title}
                direction="column"
                href={content.services.path}
                padding="l"
                gap="m"
                fillWidth
              >
                <Heading as="h3" variant="heading-strong-m">
                  {service.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {service.description}
                </Text>
                <Column as="ul" gap="8" paddingLeft="m">
                  {service.includes?.map((item, index) => (
                    <Text key={index} as="li" variant="body-default-s" onBackground="neutral-weak">
                      {item}
                    </Text>
                  ))}
                </Column>
              </Card>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* Engagement models */}
      <Column fillWidth>
        <Column fillWidth gap="l" paddingY="l">
          <Row fillWidth paddingRight="64">
            <Line />
          </Row>
          <Heading as="h2" variant="display-strong-m">
            {t.engagementTitle}
          </Heading>
          <Grid fillWidth columns="2" s={{ columns: 1 }} gap="l">
            {t.engagements.map((engagement) => (
              <Column key={engagement.title} gap="8">
                <Heading as="h3" variant="heading-strong-m">
                  {engagement.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {engagement.text}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* Who I work with */}
      <Column fillWidth>
        <Column fillWidth gap="l" paddingY="l">
          <Row fillWidth paddingRight="64">
            <Line />
          </Row>
          <Heading as="h2" variant="display-strong-m">
            {t.audienceTitle}
          </Heading>
          <Column fillWidth gap="l">
            {t.audiences.map((audience) => (
              <Column key={audience.title} gap="8">
                <Heading as="h3" variant="heading-strong-m">
                  {audience.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {audience.text}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </Column>

      {/* Approach */}
      <Column fillWidth>
        <Column fillWidth gap="m" paddingY="l">
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line />
          </Row>
          <Heading as="h2" variant="display-strong-m">
            {t.approachTitle}
          </Heading>
          {t.approachText.map((paragraph) => (
            <Text key={paragraph} variant="body-default-l" onBackground="neutral-weak">
              {paragraph}
            </Text>
          ))}
        </Column>
      </Column>

      {/* Call to action */}
      <Column fillWidth>
        <Column fillWidth gap="m" paddingY="l" horizontal="center" align="center">
          <Heading as="h2" variant="display-strong-m" wrap="balance">
            {t.ctaTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {t.ctaText}
          </Text>
          <Row gap="m" paddingTop="m" s={{ direction: "column", fillWidth: true }}>
            <Button
              data-border="rounded"
              href="https://calendar.app.google/vsTDwGyn5oBUVkrf8"
              variant="primary"
              size="m"
              arrowIcon
            >
              {t.buttons.getInTouch}
            </Button>
            <Button
              data-border="rounded"
              href={content.contact.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              {t.buttons.contact}
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
