import { GameStyled } from './styled';
import { useMemo } from 'react';

const Game = () => {
  const game = useMemo(async () => import('./game'), []);
  return <GameStyled id="game" />;
};

export default Game;
