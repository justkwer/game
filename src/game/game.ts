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
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: {
    preload: function () {
     this.load.image('player', '../../public/assets/sprites/ship.png');
    },
    create: async function () {
      const player = await this.physics.add.sprite(100, 100, 'player');
      this.input.keyboard.on('keydown', (event: any) => {
        switch (event.code) {
          case 'KeyA':
            player.setVelocityX(-200);
            break;
          case 'KeyD':
            player.setVelocityX(200);
            break;
          case 'KeyW':
            player.setVelocityY(-200);
            break;
          case 'KeyS':
            player.setVelocityY(200);
            break;
        }
      });
      this.input.keyboard.on('keyup', (event: any) => {
        switch (event.code) {
          case 'KeyA':
          case 'KeyD':
            player.setVelocityX(0);
            break;
          case 'KeyW':
          case 'KeyS':
            player.setVelocityY(0);
            break;
        }
      });
    },
  },
};

export default new Phaser.Game(gameConfig);
