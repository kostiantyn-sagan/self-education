/**
 * Задача 3.
 *
 * Улучшите имплементацию функции calculate() и назовите её calculateAdvanced().
 * Если на каком-то из вызовов функция-коллбек возбудила ошибку — отловите и сохраните её.
 *
 * После отлова ошибки перейдите к выполнению следующего коллбека.
 *
 * Улучшенная функция calculateAdvanced() должна возвращать объект с двумя свойствами: `value` и `errors`:
 * - свойство `value` содержит результат вычисления всех функций из цепочки;
 * - свойство `errors` содержит массив с объектами, где каждый объект должен обладать следующими свойствами:
 *     - index — индекс коллбека, на котором ошибка была возбуждена;
 *     - name — имя ошибки;
 *     - message — сообщение ошибки.
 *
 * Если во время выполнения функции-коллбека возникла ошибка, результат выполнения она не вернёт.
 *
 * Поэтому, для продолжения цепочки выполнения
 * необходимо брать результат последней успешно выполненной функции-коллбека.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией.
 */

// Решение

/* Мой код начало */

function calculateAdvanced(...functions) {
  return functions.reduce(
    ({ value, errors }, fn, idx) => {
      try {
        checkCallback(fn, idx);
        value = fn(value);
      } catch (e) {
        errors.push({ index: idx, name: e.name, message: e.message });
      }

      return { value, errors };
    },
    { value: null, errors: [] },
  );
}

function checkCallback(callback, idx) {
  if (typeof callback !== 'function')
    throw new Error('The argument to calculateAdvanced () is not a function');

  if (callback() === undefined)
    throw new Error(`callback at index ${idx} did not return any value.`);
}

/* Мой код конец*/

const result = calculateAdvanced(
  () => {},
  () => {
    return 7;
  },
  () => {},
  prevResult => {
    return prevResult + 4;
  },
  () => {
    throw new RangeError('Range is too big.');
  },
  prevResult => {
    return prevResult + 1;
  },
  () => {
    throw new ReferenceError('ID is not defined.');
  },
  prevResult => {
    return prevResult * 5;
  },
);

console.log(result);

// Функция вернёт:
// { value: 60,
//     errors:
//      [ { index: 0,
//          name: 'Error',
//          message: 'callback at index 0 did not return any value.' },
//        { index: 2,
//          name: 'Error',
//          message: 'callback at index 2 did not return any value.' },
//        { index: 4, name: 'RangeError', message: 'Range is too big.' },
//        { index: 6,
//          name: 'ReferenceError',
//          message: 'ID is not defined.' } ] }

exports.calculateAdvanced = calculateAdvanced;
