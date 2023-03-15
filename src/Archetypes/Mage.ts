import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _instance = 0;
  private _mageEnergyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._instance += 1;
    this._mageEnergyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._mageEnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance; // retorna _instance para a classe Archetype
  }
}

export default Mage;