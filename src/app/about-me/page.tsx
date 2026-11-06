"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { baseURL } from "@/resources";
import { getContent } from "@/resources/content";
import { Column, Heading, IconButton, Row, Schema, Text } from "@once-ui-system/core";
import Image from "next/image";

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
                <Column horizontal="center" gap="m" s={{ minWidth: 0, width: "100%" }}>
                  <Row gap="8" wrap horizontal="center">
                    {member.email && (
                      <IconButton
                        href={`mailto:${member.email}`}
                        icon="email"
                        variant="secondary"
                        tooltip={"Email"}
                      />
                    )}
                    {member.linkedin && (
                      <IconButton
                        href={member.linkedin}
                        icon="linkedin"
                        variant="secondary"
                        tooltip={"LinkedIn"}
                      />
                    )}
                    {member.github && (
                      <IconButton
                        href={member.github}
                        icon="github"
                        variant="secondary"
                        tooltip={"GitHub"}
                      />
                    )}
                  </Row>
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
                  {member.logos && member.logos.length > 0 && (
                    <Row gap="m" paddingTop="m" wrap>
                      {member.logos.map((logo, index) => (
                        <Image
                          key={index}
                          src={logo.src}
                          alt={logo.alt}
                          width={40}
                          height={40}
                          style={{
                            width: "auto",
                            height: 40,
                            objectFit: "contain",
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </Row>
                  )}
                </Column>
              </Row>
            ))
          ) : (
            <Text variant="body-default-l" onBackground="neutral-weak">
              {language === "fr"
                ? "Aucun membre d'équipe disponible."
                : "No team members available."}
            </Text>
          )}
        </Column>
      </Column>
    </Column>
  );
}
