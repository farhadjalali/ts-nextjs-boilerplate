import { en } from "./translations/en";
import { nl } from "./translations/nl";

type TextKeys = keyof typeof en;
export type LanguageKeys = "en" | "nl";
export type I18nTranslation = { [key in TextKeys]: string };
export type I18nType = (key: TextKeys) => string;

export const i18n =
  (locale: LanguageKeys | undefined) =>
  (key: TextKeys): string => {
    switch (locale) {
      case "nl":
        return nl[key] || en[key] || key;

      default:
        return en[key] || key;
    }
  };
