import translations, { SupportedLanguages } from "./translations";
import { useLanguage } from "../context/LanguageContext";

export function useTranslation() {
  const { language } = useLanguage();

  return (key: string): string => {
    const lang = language as SupportedLanguages;
    const text = translations[lang][key];

    if (!text) {
      console.warn(`⚠️ Falta traducción para la clave "${key}" en "${lang}"`);
      return key;
    }

    return text;
  };
}
