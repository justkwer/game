import styled from 'styled-components';

export const HeaderStyled = styled.header`
  section {
    ${({ theme }) => theme.flex.row};
    justify-content: space-between;
  }
`;
