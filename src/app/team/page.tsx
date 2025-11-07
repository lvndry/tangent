"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import {
  Column,
  Heading,
  IconButton,
  Row,
  Schema,
  Text
} from "@once-ui-system/core";

export default function TeamPage() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={content.team.path}
        title={content.team.title}
        description={content.team.description}
        image={content.team.image ? `${baseURL}${content.team.image}` : undefined}
      />
      <Column fillWidth gap="l">
        <Column gap="m">
          <Heading variant="display-strong-xl">{content.team.title}</Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {content.team.description}
          </Text>
        </Column>

        <Column fillWidth gap="xl" paddingTop="l">
          {content.team.members && content.team.members.length > 0 ? (
            content.team.members.map((member) => (
              <Row
                key={member.email || member.name}
                fillWidth
                gap="l"
                paddingY="l"
                wrap
                s={{ direction: "column", align: "center" }}
              >
                <Column
                  horizontal="center"
                  gap="m"
                  s={{ minWidth: "auto", width: "100%" }}
                >
                  {member.email && (
                    <IconButton
                      href={`mailto:${member.email}`}
                      icon="email"
                      variant="secondary"
                      tooltip={`${language === "fr" ? "Envoyer un email à" : "Email"} ${member.name}`}
                    />
                  )}
                </Column>
                <Column flex={1} gap="m" s={{ width: "100%" }}>
                  <Column gap="4">
                    <Heading as="h2" variant="display-strong-m">
                      {member.name}
                    </Heading>
                    <Text variant="heading-default-s" onBackground="brand-weak">
                      {member.role}
                    </Text>
                  </Column>
                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {member.bio}
                  </Text>
                </Column>
              </Row>
            ))
          ) : (
            <Text variant="body-default-l" onBackground="neutral-weak">
              {language === "fr" ? "Aucun membre d'équipe disponible." : "No team members available."}
            </Text>
          )}
        </Column>
      </Column>
    </Column>
  );
}
