// eslint-disable-next-line import/prefer-default-export
export class Character {
  constructor(name) {
    this.name = name;
    this.type = undefined;
    this.level = 1;
    this.health = 100;
    this.defence = 1;
    this.attack = 1;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
    try {
      if (points < 0) {
        throw new Error('урон не может быть отрицательным');
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  levelUp() {
    try {
      if (this.health === 0) {
        throw new Error('Повышение уровня умершего персонажа невозможно');
      }
    } catch (e) {
      throw new Error(e.message);
    }
    this.health = 100;
    this.defence *= 1.2;
    this.attack *= 1.2;
    this.level += 1;
  }
}
