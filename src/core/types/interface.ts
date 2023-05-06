export interface Users {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IUnit {
  fly(): void;
  shoot(): void;
  health: number;
  takeDamage(damage: number): void;
  isDead(): boolean;
}