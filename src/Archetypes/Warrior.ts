import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _instance = 0;
  private _WarriorEnergyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instance += 1;
    this._WarriorEnergyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._WarriorEnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance; // retorna _instance para a classe Archetype
  }
}

export default Warrior;