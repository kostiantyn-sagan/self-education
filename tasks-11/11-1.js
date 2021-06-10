/**
 * Задача 1.
 *
 * Создайте функцию createNumberGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет генерировать и возвращать случайное число от 1 до 100 (не включая само число 100).
 *
 * Условия:
 * - Числа не должны повторяться;
 * - Задачу нужно решить с помощью замыкания.
 *
 * Генерировать ошибку если:
 * - Функция была вызвана, когда доступные для выведения числа закончились.
 *
 * Подсказка: в замыкании можно хранить массив с числами, которые уже были созданы функцией.
 */

// Решение

/* Мой код начало */

function createNumberGenerator() {
  const createdNumbers = [];

  return () => {
    const isAvailableNumbers = createdNumbers.length !== 99;

    if (!isAvailableNumbers) throw new Error();

    let num = null;

    for (let i = 0; isAvailableNumbers; i += 1) {
      num = Math.floor(Math.random() * (100 - 1) + 1);

      if (!createdNumbers.includes(num)) {
        createdNumbers.push(num);
        break;
      }
    }

    return num;
  };
}

/* Мой код конец */

const TOTAL_ITERATIONS = 101;
let invocations = 0;
const generateNumber = createNumberGenerator();

try {
  for (let iteration = 1; iteration < TOTAL_ITERATIONS; iteration++) {
    console.log(`Iteration: ${iteration}. Number: ${generateNumber()}`);
    invocations += 1;
  }
} catch {
  console.log('Error caught.');
  console.log(`Function generated an error after ${invocations} invocations.`);
}

// Когда все числа выведутся:
// Error caught.
// Function generated an error after 99 invocations.

exports.createNumberGenerator = createNumberGenerator;
