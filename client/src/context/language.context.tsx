import { createContext, SetStateAction } from "react";
import { JSONDataLanguage } from "@shared/helpers/translation.helper.ts";

export type LanguageType = "ro" | "ru";

interface ITranslation {
  language: LanguageType;
  t: JSONDataLanguage | null;
  setLanguage: (land: LanguageType) => SetStateAction<void>;
  loading: boolean;
  error?: Error | null;
}

export const LanguageContext = createContext<ITranslation>({
  language: "ro",
  t: null,
  setLanguage: () => {},
  loading: false,
});
