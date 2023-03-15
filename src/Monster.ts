import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  public get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (this._lifePoints - damage <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}