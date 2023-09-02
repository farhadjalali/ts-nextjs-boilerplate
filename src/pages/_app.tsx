import { I18nProvider } from "@/i18n";
import { GlobalStyle } from "@/styles/globals";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import ErrorPage from "./_error";
import ErrorBoundary from "@/components/error-boundary/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <I18nProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </I18nProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
