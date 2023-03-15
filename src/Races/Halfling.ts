import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instance; // retorna _instance para a classe Race
  }
}

export default Halfling;