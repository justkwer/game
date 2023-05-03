import { MainLayout } from '@layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@core/theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <div>Main Page</div>
      </MainLayout>
    </ThemeProvider>
  );
};

export default Main;
