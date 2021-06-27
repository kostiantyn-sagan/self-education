/**
 * Задача 1.
 *
 * Дан базовый класс робота-уборщика.
 *
 * Добавьте роботу функционал употребления энергии:
 * - при начале уборки уровень энергии должен уменьшиться;
 * - в расчёте использовать внутренний коэффициент ENERGY_CONSUMPTION.
 *
 * Затем добавьте роботу публичный метод stop() для остановки процесса уборки.
 * В если уборка остановлена раньше времени завершения,
 * onReady сработать не должен, а также нужно вывести другое сообщение.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять;
 * - использовать функцию clearTimeout;
 * - идентификатор таймера нужно хранить в приватной переменной конструктора.
 */

/* Мой код начало */

class CleanerRobot {
  static ENERGY_CONSUMPTION = 1; /* Расход энергии: 1% батареи на 1 час работы. */
  static CLEANING_SPEED = 10; /* Скорость уборки: 10 квадратных метров в час. */

  #timerId = 0;

  constructor(initialEnergy = 0, cleaningSquare) {
    this.energy = initialEnergy;
    this.cleaningSquare = cleaningSquare;
  }

  clean = () => {
    this.calculateEnergyConsumption();
    const cleaningTime = this.getCleaningTime();
    console.log(`Начинаю процесс уборки. Время уборки: ${cleaningTime} часов.`);

    /* Для удобства время уборки сокращено до формата 1 час = 1 секунда */
    this.#timerId = setTimeout(this.onReady.bind(this), cleaningTime * 1000);
  };

  stop = () => {
    clearTimeout(this.#timerId);

    console.log(
      `Уборка завершена досрочно. Осталось заряда батареи: ${this.energy}.`,
    );
  };

  getCleaningTime() {
    return this.cleaningSquare / CleanerRobot.CLEANING_SPEED;
  }

  onReady() {
    console.log(`Уборка завершена. Осталось заряда батареи: ${this.energy}.`);
  }

  calculateEnergyConsumption() {
    this.energy -= CleanerRobot.ENERGY_CONSUMPTION * this.getCleaningTime();
  }
}

/* Мой код конец */

const cleanerRobot = new CleanerRobot(50, 45);

cleanerRobot.clean(); /* Начинаю процесс уборки. Время уборки: 4.5 часов. */

/* Спустя 4.5 секунды: Уборка завершена. Осталось заряда батареи: 45.5. */

setTimeout(() => {
  cleanerRobot.stop(); /* Спустя 1 секунду: Уборка завершена досрочно. Осталось заряда батареи: 45.5. */
}, 1000);

exports.CleanerRobot = CleanerRobot;
