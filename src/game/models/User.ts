import { IUnit } from "@core/types/interface";
export class Unit implements IUnit {
    private x: number;
    private y: number;
    private health: number;
    private velocityX: number;
    private velocityY: number;
    
    constructor(x: number, y: number, health: number) {
      this.x = x;
      this.y = y;
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

    }
  }