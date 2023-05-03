import { Burger, Logo } from '@components';
import { Section } from '@core/theme';
import { HeaderStyled } from './styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Section>
        <Logo />
        <Burger />
      </Section>
    </HeaderStyled>
  );
};
