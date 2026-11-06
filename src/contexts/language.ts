export type Language = "en" | "fr";

export const LANGUAGE_COOKIE = "language";

export function resolveLanguage(
  cookieValue: string | undefined,
  acceptLanguage: string | null,
): Language {
  if (cookieValue === "en" || cookieValue === "fr") {
    return cookieValue;
  }
  return acceptLanguage?.toLowerCase().startsWith("fr") ? "fr" : "en";
}
