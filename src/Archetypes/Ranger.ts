import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _instance = 0;
  private _RangerEnergyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger._instance += 1;
    this._RangerEnergyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._RangerEnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance; // retorna _instance para a classe Archetype
  }
}

export default Ranger;