import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._instance; // retorna _instance para a classe Race
  }
}

export default Elf;