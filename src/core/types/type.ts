import { MouseEvent } from 'react';

export type ButtonProp = {
  active?: boolean;
  typeButton?: 'submit';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
