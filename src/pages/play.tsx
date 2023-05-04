import { GameLayout } from '@layout';
import dynamic from 'next/dynamic';

const Game = dynamic(() => import('@game'), {
  ssr: false,
});

const Play = () => {
  return (
    <GameLayout>
      <Game />
    </GameLayout>
  );
};

export default Play;
