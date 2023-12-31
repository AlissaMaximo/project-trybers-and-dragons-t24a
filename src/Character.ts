import Race, { Elf } from './Races';
import Archetype, { Mage, SimpleFighter } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy; // Interface Energy é um objeto

  constructor(name: string) {
    this._dexterity = Math.floor(Math.random() * 11); // Cálculo daqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2); // como a raça já foi setada, o maxLifePoints da raça pode ser pego
    this._lifePoints = this._maxLifePoints; // "lifePoints por padrão com o mesmo valor de maxLifePoints da classe" <- 'da classe' significa da classe atual, ou especificaria da classe de raça
    this._strength = Math.floor(Math.random() * 11);
    this._defense = Math.floor(Math.random() * 11);
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 11),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get maxLifePoints(): number { return this._maxLifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return { ...this._energy }; } // traz o que tem dentro (...) do objeto energy, e então coloca de volta em um objeto aqui

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    
    if (damage > 0) this._lifePoints -= damage;
    else this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;

    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength * 1.5);
  }
}