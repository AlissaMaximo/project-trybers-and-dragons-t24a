import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';

export default class Character {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = Math.floor(Math.random() * 11); // Cálculo daqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2); // como a raça já foi setada, o maxLifePoints da raça pode ser pego
    this._lifePoints = this._maxLifePoints; // "lifePoints por padrão com o mesmo valor de maxLifePoints da classe" <- 'da classe' significa da classe atual, ou especificaria da classe de raça
    this._strength = Math.floor(Math.random() * 11);
    this._defense = Math.floor(Math.random() * 11);
    this._energy = this._archetype.energyType;
  }
}