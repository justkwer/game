import { Footer, Header } from '@containers';
import { FC, ReactNode } from 'react';
import { GlobalStyle, Section, theme } from '@core/theme';
import { ThemeProvider } from 'styled-components';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <main>
      <Section>{children}</Section>
    </main>
    <Footer />
  </ThemeProvider>
);
