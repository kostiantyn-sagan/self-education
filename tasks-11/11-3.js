/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

/* Мой код начало */

function createFibonacciGenerator() {
  let i = 0;
  let beforeLastFibonacciNum = 1;
  let lastFibonacciNum = 1;

  return {
    print() {
      if (i <= 1) {
        i += 1;

        return lastFibonacciNum;
      }

      const fibonacciNum = lastFibonacciNum + beforeLastFibonacciNum;

      beforeLastFibonacciNum = lastFibonacciNum;
      lastFibonacciNum = fibonacciNum;
      i += 1;

      return fibonacciNum;
    },
    reset() {
      i = 0;
      beforeLastFibonacciNum = 1;
      lastFibonacciNum = 1;
    },
  };
}

/* Мой код конец */

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2

exports.createFibonacciGenerator = createFibonacciGenerator;
