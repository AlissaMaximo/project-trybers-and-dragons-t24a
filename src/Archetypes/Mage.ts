import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _instance = 0;
  private _mageEnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instance += 1;
  }

  get energyType(): EnergyType {
    return this._mageEnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance; // retorna _instance para a classe Archetype
  }
}

export default Mage;