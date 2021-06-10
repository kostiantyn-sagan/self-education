/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
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

  return () => {
    if (i <= 1) {
      i += 1;

      return lastFibonacciNum;
    }

    const fibonacciNum = lastFibonacciNum + beforeLastFibonacciNum;

    beforeLastFibonacciNum = lastFibonacciNum;
    lastFibonacciNum = fibonacciNum;
    i += 1;

    return fibonacciNum;
  };
}

/* Мой код конец */

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
