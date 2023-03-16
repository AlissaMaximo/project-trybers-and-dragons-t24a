import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private monsters: Array<Monster | SimpleFighter>,
    _character: Character | Fighter,
  ) {
    super(_character); // character torna-se player porque pega do Battle
  }

  /*   private attackEnemy(enemy: Fighter | SimpleFighter): void {
    this.player.attack(enemy);
  } */

  fight(): number {
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints > 0
        && monster.lifePoints > 0) {
        this.player.attack(monster);
        // if (monster.lifePoints > 0) {
        monster.attack(this.player);
        // }
      }
    });

    if (this.player.lifePoints === 0) return -1;
    return 1;
  }
}

export default PVE;