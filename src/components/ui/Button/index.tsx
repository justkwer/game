import { FC, PropsWithChildren } from 'react';
import { ButtonStyled } from './styled';
import { ButtonProp } from '@core/types';

export const Button: FC<PropsWithChildren<ButtonProp>> = ({
  children,
  active,
  typeButton,
  onClick,
}) => (
  <ButtonStyled
    active={active ?? true}
    disabled={active}
    type={typeButton ?? 'button'}
    onClick={onClick}
  >
    {children}
  </ButtonStyled>
);
