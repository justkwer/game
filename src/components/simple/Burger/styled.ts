import styled from 'styled-components';

export const BurgerStyled = styled.div`
  position: relative;
  width: 24px;
  height: 30px;
  padding: 5px 2px;

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    width: 32px;
    height: 40px;
    padding: 6.5px 2.5px;
  }

  @media (min-width: ${({ theme }) => theme.media.large}) {
    display: none;
  }
`;

export const BurgerBtnStyled = styled.span<{ active: boolean }>`
  &,
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 1px;
    transition-duration: 0.2s;
  }

  top: 50%;
  transform: ${({ active }) => active && 'rotate(45deg);'};

  &:before {
    content: '';
    top: -6px;
    ${({ active }) => active && 'top: 0; transform: rotate(0);'}
  }

  &:after {
    content: '';
    top: 6px;
    ${({ active }) => active && 'top: 0; transform: rotate(90deg);'}
  }

  @media (min-width: ${({ theme }) => theme.media.medium}) {
    &,
    &:before,
    &:after {
      width: 27px;
    }

    &:before {
      top: -8px;
    }

    &:after {
      top: 8px;
    }
  }
`;
