import { GlobalStyle, Section, theme } from '@core/theme';
import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

export const GameLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <main>
      <Section>{children}</Section>
    </main>
  </ThemeProvider>
);
