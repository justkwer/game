import styled from 'styled-components';
import Link from 'next/link';
import { hover } from '@core/theme';

export const LogoStyled = styled(Link)`
  figure {
    ${hover};
    ${({ theme }) => theme.flex.row};
    gap: 5px;

    button {
      span {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;
