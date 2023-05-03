import Image from 'next/image';
import { SignatureStyled } from './styled';

export const Signature = () => {
  return (
    <SignatureStyled>
      <Image src="svg/ease.svg" alt="ease" width={30} height={30} />
      <figcaption>ease</figcaption>
    </SignatureStyled>
  );
};
