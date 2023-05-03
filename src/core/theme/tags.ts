import styled from 'styled-components';

export const Section = styled.section`
  min-width: ${({ theme }) => theme.sizes.container.width[0]}px;
  padding: ${({ theme }) => theme.sizes.container.padding[0]};

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    min-width: ${({ theme }) => theme.sizes.container.width[1]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[1]};
  }

  @media (min-width: ${({ theme }) => theme.media.large}) {
    min-width: ${({ theme }) => theme.sizes.container.width[2]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[2]};
  }
`;
