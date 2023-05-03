import { useEffect, useState } from 'react';
import { BurgerBtnStyled, BurgerStyled } from './styled';
import { useRouter } from 'next/router';

export const Burger = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  const handleClick = () => setIsActive(!isActive);

  const handleClose = () => isActive && setIsActive(false);

  useEffect(() => {
    handleClose();
  }, [router]);

  useEffect(() => {
    window.addEventListener('resize', handleClose);

    return () => {
      window.removeEventListener('resize', handleClose);
    };
  });

  return (
    <BurgerStyled onClick={handleClick}>
      <BurgerBtnStyled active={isActive} />
    </BurgerStyled>
  );
};
