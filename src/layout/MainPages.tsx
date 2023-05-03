import { Footer, Header } from '@containers';
import { FC, ReactNode } from 'react';
import { Section } from '@core/theme';

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main>
      <Section>{children}</Section>
    </main>
    <Footer />
  </>
);
