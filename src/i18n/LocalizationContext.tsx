import { FC, ReactNode, createContext, useContext } from "react";
import { I18nType, LanguageKeys, i18n } from "./i18n";
import { useRouter } from "next/router";

const I18nContext = createContext<I18nType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within a I18nProvider");
  }
  return context;
};

export const I18nProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();

  return (
    <I18nContext.Provider value={i18n(router.locale as LanguageKeys)}>
      {children}
    </I18nContext.Provider>
  );
};
