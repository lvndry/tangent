"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import {
  Column,
  Heading,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import React from "react";

export default function ServicesPage() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Column maxWidth="m" gap="xl" paddingY="12">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.services.path}
        title={content.services.title}
        description={content.services.description}
        image={content.services.image ? `${baseURL}${content.services.image}` : undefined}
      />
      <Column fillWidth gap="l">
        <Column gap="m">
          <Heading variant="display-strong-xl">{content.services.title}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {content.services.description}
          </Text>
        </Column>

        <Column fillWidth gap="xl" paddingTop="l">
          {content.services.services.map((service, index) => {
            // Extract text content from React nodes for schema
            let serviceDescription = '';
            if (typeof service.description === 'string') {
              serviceDescription = service.description;
            } else if (React.isValidElement(service.description)) {
              const element = service.description as React.ReactElement<{ children?: React.ReactNode }>;
              serviceDescription = element.props?.children ? String(element.props.children) : '';
            }

            return (
            <Column key={index} fillWidth gap="m" paddingY="l">
              <Schema
                as="webPage"
                baseURL={baseURL}
                path={content.services.path}
                title={service.title}
                description={serviceDescription}
              />
              <Heading as="h2" variant="display-strong-m">
                {service.title}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {service.description}
              </Text>

              {service.includes && service.includes.length > 0 && (
                <Column fillWidth gap="m" paddingTop="m">
                  <Heading as="h3" variant="heading-strong-m">
                    {language === "fr" ? "Ce qui est inclus" : "What's Included"}
                  </Heading>
                  <Column as="ul" gap="12" paddingLeft="m">
                    {service.includes.map((item, itemIndex) => (
                      <Text
                        key={itemIndex}
                        as="li"
                        variant="body-default-m"
                        onBackground="neutral-weak"
                      >
                        {item}
                      </Text>
                    ))}
                  </Column>
                </Column>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <Column fillWidth gap="m" paddingTop="m">
                  <Heading as="h3" variant="heading-strong-m">
                    {language === "fr" ? "Avantages" : "Benefits"}
                  </Heading>
                  <Row wrap gap="8" paddingTop="8">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <Tag key={benefitIndex} size="l">
                        {benefit}
                      </Tag>
                    ))}
                  </Row>
                </Column>
              )}
            </Column>
            );
          })}
        </Column>
      </Column>
    </Column>
  );
}

