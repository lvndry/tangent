import type { iconLibrary } from "@/resources/icons";

declare module "@once-ui-system/core" {
  interface IconLibraryOverrides extends Record<keyof typeof iconLibrary, true> {}
}
