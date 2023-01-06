import { useRouter } from "next/router";
import en from "../public/locales/en/common.json";
import ru from "../public/locales/ru/common.json";
import uz from "../public/locales/uz/common.json";

const TRANSLATIONS = { en, uz, ru};

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = (locale) => router.push(asPath, asPath, { locale });

  const t = (keyString) => TRANSLATIONS[locale][keyString];

  return { t, locale, setLocale };
}