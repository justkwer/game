import React from 'react';
import { LogoStyled } from './styled';
import Image from 'next/image';
import { PathsToPage } from '@core/constants';

export const Logo = () => (
  <LogoStyled href={PathsToPage.Main}>
    <figure>
      <Image src="svg/ease.svg" alt="ease" width={30} height={30} />
      <figcaption>
        <button>
          <p>ease</p>
        </button>
      </figcaption>
    </figure>
  </LogoStyled>
);
