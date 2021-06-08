/**
 * Задача 2.
 *
 * Напишите функцию calculate(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске calculate() последовательно запускает коллбек-функции из аргументов.
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Первая коллбек-функция не принимает параметров.
 *
 * После выполнения всей цепочки, функция calculate() должна вернуть результат выполнения последней коллбек-функции.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов функции calculate() не является функцией;
 * - Любая функция из аргументов не вернула значение.
 */

// Решение

/* Мой код начало */

function calculate(...functions) {
  checkArguments(functions);

  return functions.reduce((result, fn) => (result = fn(result)), null);
}

function checkArguments(functions) {
  return functions.forEach(fn => {
    if (typeof fn !== 'function')
      throw new Error('The argument to calculate () is not a function');

    if (fn() === undefined)
      throw new Error('The function did not return a value from the arguments');
  });
}

/* Мой код конец */

const result = calculate(
  () => {
    return 7;
  },
  prevResult => {
    return prevResult + 4;
  },
  prevResult => {
    return prevResult * 5;
  },
);

console.log(result); // 55

exports.calculate = calculate;
