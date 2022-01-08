import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import locales from "../translations/locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ...locales,
    },
    detection: {
      caches: ["cookie"],
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
    },
  });

export default i18n;
