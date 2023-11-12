import { ReactNode, useEffect, useState } from "react";
import {
  JSONDataLanguage,
  loadROJson,
  loadRUJson,
} from "@shared/helpers/translation.helper.ts";
import { LanguageContext, LanguageType } from "@context/language.context.tsx";

interface Props {
  children: ReactNode;
}

function TranslateProvider({ children }: Props) {
  const [language, setLanguage] = useState<LanguageType>("ro");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [t, setT] = useState<JSONDataLanguage | null>(null);

  async function loadLanguageFromFile() {
    if (language === "ro") {
      await loadROJson().then((t) => setT(t));
    } else if (language === "ru") {
      await loadRUJson().then((t) => setT(t));
    }
  }

  useEffect(() => {
    setLoading(true);
    loadLanguageFromFile()
      .catch((e: Error) => setError({ name: e.name, message: e.message }))
      .finally(() => setLoading(false));
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, t, setLanguage, loading, error }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default TranslateProvider;
