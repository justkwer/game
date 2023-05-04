import Phaser from 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#282c34',
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: '100%',
    height: '100%',
  },
};

export default new Phaser.Game(gameConfig);
