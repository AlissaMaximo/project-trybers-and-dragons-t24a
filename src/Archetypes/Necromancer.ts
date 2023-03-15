import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _instance = 0;
  private _necromancerEnergyType: EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer._instance += 1;
    this._necromancerEnergyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._necromancerEnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance; // retorna _instance para a classe Archetype
  }
}

export default Necromancer;