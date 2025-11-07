"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import {
    Button,
    Card,
    Column,
    Heading,
    Line,
    RevealFx,
    Row,
    Schema,
    Tag,
    Text,
} from "@once-ui-system/core";

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
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {content.home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {content.home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" gap="m" s={{ direction: "column" }}>
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
                href={content.contact.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                {t.buttons.getInTouch}
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Services Overview */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="l" paddingY="l">
          <Column gap="m">
            <Heading as="h2" variant="display-strong-m">
              {t.servicesTitle}
            </Heading>
            <Text variant="heading-default-m" onBackground="neutral-weak">
              {t.servicesSubtitle}
            </Text>
          </Column>
          <Row fillWidth gap="l" wrap s={{ direction: "column" }}>
            {content.services.services.map((service, index) => (
              <Card key={index} flex={1} padding="l" gap="m">
                <Heading as="h3" variant="heading-strong-m">
                  {service.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {service.description}
                </Text>
                <Button
                  href={content.services.path}
                  variant="tertiary"
                  size="s"
                  arrowIcon
                >
                  {t.buttons.learnMore}
                </Button>
              </Card>
            ))}
          </Row>
          <Row fillWidth horizontal="center" paddingTop="m">
            <Button
              href={content.services.path}
              variant="secondary"
              size="m"
              arrowIcon
            >
              {t.buttons.viewAllServices}
            </Button>
          </Row>
        </Column>
      </RevealFx>

      {/* Target Audience */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="l" paddingY="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Column fillWidth gap="m">
            <Heading as="h2" variant="display-strong-m">
              {t.targetAudienceTitle}
            </Heading>
            <Text variant="heading-default-m" onBackground="neutral-weak">
              {t.targetAudienceSubtitle}
            </Text>
          </Column>
          <Column fillWidth gap="m" paddingLeft="l">
            {t.targetAudience.map((audience, index) => (
              <Row key={index} gap="m" vertical="center">
                <Tag size="l">✓</Tag>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {audience}
                </Text>
              </Row>
            ))}
          </Column>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      </RevealFx>

      {/* Mission/Vision */}
      <RevealFx translateY="16" delay={1.0}>
        <Column fillWidth gap="l" paddingY="l">
          <Column gap="m">
            <Heading as="h2" variant="display-strong-m">
              {t.approachTitle}
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              {t.approachText}
            </Text>
          </Column>
        </Column>
      </RevealFx>
    </Column>
  );
}

