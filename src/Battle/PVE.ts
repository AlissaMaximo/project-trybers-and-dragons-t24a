import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: Array<Fighter | SimpleFighter>;

  constructor(
    character: Fighter,
    monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(character); // character torna-se player porque pega do Battle
    this._monsters = monsters;
  }

  private blowExchange(duelists: Array<Fighter | SimpleFighter>) {
    duelists.forEach((duelist) => {
      if (this.player.lifePoints > 0) this.player.attack(duelist);
      if (duelist.lifePoints !== -1) duelist.attack(this.player);
    });
  }

  fight(): number {
    while (this.player.lifePoints > 0
      && this._monsters.some((monster) => monster.lifePoints > 0)) {
      this.blowExchange(this._monsters);
    }

    return super.fight();
  }
}