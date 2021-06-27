/**
 * Задача 2.
 *
 * Добавьте роботу геттер и сеттер для приватного свойства energy.
 * Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
 *
 * Генерировать ошибки если:
 * - новый заряд батареи устанавливается в значении меньшем, чем 0;
 * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
 * - при создании экземпляра CleanerRobot изначальный уровень энергии зада в не рамок допустимого диапазона.
 */

class CleanerRobot {
  static MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */

  #energy = null;

  constructor(initialEnergy = 0) {
    this.energy = initialEnergy;
  }

  get energy() {
    return this.#energy;
  }

  set energy(newEnergy) {
    this.validateLevelEnergy(newEnergy);
    this.#energy = newEnergy;
  }

  validateLevelEnergy(energy) {
    if (energy < 0) throw new Error('New energy level can not be less than 0.');

    if (energy > CleanerRobot.MAX_ENERGY_CAPACITY)
      throw new Error(
        `New energy level can not be more than ${CleanerRobot.MAX_ENERGY_CAPACITY}.`,
      );
  }
}

const cleanerRobot = new CleanerRobot(22);

/* Текущий заряд батареи: 22 */
console.log(`Текущий заряд батареи: ${cleanerRobot.energy}`);

cleanerRobot.energy = 55;

/* Текущий заряд батареи: 55 */
console.log(`Текущий заряд батареи: ${cleanerRobot.energy}`);

try {
  new CleanerRobot(-1);
} catch (error) {
  /* Error: New energy level can not be less than 0. */
  console.log(`${error.name}: ${error.message}`);
}

try {
  cleanerRobot.energy = -22;
} catch (error) {
  /* Error: New energy level can not be less than 0. */
  console.log(`${error.name}: ${error.message}`);
}

try {
  cleanerRobot.energy = 101;
} catch (error) {
  /* Error: New energy level can not be more than 100. */
  console.log(`${error.name}: ${error.message}`);
}

exports.CleanerRobot = CleanerRobot;
