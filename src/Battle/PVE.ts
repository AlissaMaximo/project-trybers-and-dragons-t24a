import Fighter, { SimpleFighter } from '../Fighter';
import Character from '../Character';
import Battle from './Battle';

class PVE extends Battle {
  private _enemies: Array<Fighter | SimpleFighter>;

  constructor(
    monsters: Array<Fighter | SimpleFighter>,
    _character: Character,
  ) {
    super(_character); // character torna-se player porque pega do Battle
    this._enemies = monsters;
  }

  private attackEnemy(enemy: Fighter | SimpleFighter): void {
    this.player.attack(enemy);
  }

  fight(): number {
    while (this.player.lifePoints > -1
      && this._enemies.some((enemy) => enemy.lifePoints > -1)) {
      this._enemies.forEach((currentEnemy) => {
        this.player.attack(currentEnemy);
        if (currentEnemy.lifePoints > -1) currentEnemy.attack(this.player);
      });
    }

    return super.fight();
  }
}

export default PVE;