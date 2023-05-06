import { IUnit } from '@core/types/interface';
import * as Phaser from 'phaser';

export class Unit extends Phaser.GameObjects.Sprite implements IUnit {
  private health: number;
  private velocityX: number;
  private velocityY: number;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    health: number,
  ) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    this.health = health;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  public setVelocityX(velocityX: number) {
    this.velocityX = velocityX;
  }

  public setVelocityY(velocityY: number) {
    this.velocityY = velocityY;
  }

  public update(deltaTime: number) {
    this.x += this.velocityX * deltaTime;
    this.y += this.velocityY * deltaTime;
  }

  public shoot() {
    // Implement shoot logic here
  }
}
