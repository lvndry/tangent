"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getContent } from "@/resources/content";
import { Button, Column, Input, Text } from "@once-ui-system/core";
import { useState } from "react";

export function ContactForm() {
  const { language } = useLanguage();
  const content = getContent(language);
  const t = content.translations.contact.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Column fillWidth gap="l" paddingTop="l" maxWidth="s">
      <form onSubmit={handleSubmit}>
        <Column fillWidth gap="m">
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.placeholder.name}
            required
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.placeholder.email}
            required
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder={t.placeholder.phone}
            value={formData.phone}
            onChange={handleChange}
          />

          <Column fillWidth gap="4">
            <Text variant="label-default-m">{t.service}</Text>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                padding: "var(--static-space-12)",
                borderRadius: "var(--static-radius-m)",
                border: "1px solid var(--neutral-alpha-medium)",
                background: "var(--page-background)",
                color: "var(--neutral-on-background-strong)",
                fontSize: "var(--static-font-size-m)",
                fontFamily: "var(--font-body)",
              }}
            >
              <option value="">{t.serviceOptions.select}</option>
              <option value="ai-strategy">{t.serviceOptions.strategy}</option>
              <option value="build-integrate">{t.serviceOptions.build}</option>
              <option value="private-ai">{t.serviceOptions.infrastructure}</option>
              <option value="technical-leadership">{t.serviceOptions.leadership}</option>
              <option value="training-governance">{t.serviceOptions.training}</option>
              <option value="other">{t.serviceOptions.other}</option>
            </select>
          </Column>

          <Column fillWidth gap="4">
            <Text variant="label-default-m">{t.message}</Text>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder={t.placeholder.message}
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "var(--static-space-12)",
                borderRadius: "var(--static-radius-m)",
                border: "1px solid var(--neutral-alpha-medium)",
                background: "var(--page-background)",
                color: "var(--neutral-on-background-strong)",
                fontSize: "var(--static-font-size-m)",
                fontFamily: "var(--font-body)",
                resize: "vertical",
                minHeight: "120px",
              }}
            />
          </Column>

          {submitStatus === "success" && (
            <Text variant="body-default-m" onBackground="brand-weak">
              {t.success}
            </Text>
          )}

          {submitStatus === "error" && (
            <Text variant="body-default-m" onBackground="accent-weak">
              {t.error}
            </Text>
          )}

          <Button
            type="submit"
            variant="primary"
            size="m"
            disabled={isSubmitting}
            arrowIcon={!isSubmitting}
          >
            {isSubmitting ? t.sending : t.submit}
          </Button>
        </Column>
      </form>
    </Column>
  );
}
