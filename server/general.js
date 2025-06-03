/** @module general
 *  Модуль для генерации уникального id 
 */

/** Функция реализации генерации уникального шестнадцатеричного числа.
 * @memberof module:general
 * @exports
 * @function
 * @name genUniqeId
 * 
 * @param {number} n - разрядность возвращаемого значения.
 * 
 * @returns {string} - шестнадцатеричное сгенерированное случайное значение заданной разрядности.
 */
export const genUniqeId = (n) => 
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11)
  .replace(/[018]/g, (c) =>  
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1)))[0] & (15 >> (c / 4)))
    ).toString(16)
  .slice(0, n) 
