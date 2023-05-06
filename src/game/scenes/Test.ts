import { Scene } from 'phaser';

export default class Test extends Scene {
  preload() {
    this.load.image('player', 'assets/sprites/ship.png');
  }
  create() {
    const player = this.physics.add
      .sprite(100, 100, 'player')
      .setScale(0.3, 0.3);
    this.input.keyboard.on('keydown', (event: KeyboardEvent) => {
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
    this.input.keyboard.on('keyup', (event: KeyboardEvent) => {
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
    this.input.on('pointerup', (pointer: any, gameObject: any) => {
      console.log('click');
    });
    console.log('create method executed!');
  }
  update() {
    /*         console.log('update method executed!'); */
  }
}
