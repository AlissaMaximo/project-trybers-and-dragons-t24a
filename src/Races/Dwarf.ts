import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}