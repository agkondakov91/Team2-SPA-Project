/** @module constants
 * Модуль определения переменных для HTTP-методов и endpoints.
 */

/** Адрес основного ендпоинта с данными для секий 1, 2, 3, 4
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const SERVER_URL_DATA = 'http://localhost:3000/data';

/** Адрес ендпоинта с данными блога
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const SERVER_URL_BLOGS = "http://localhost:3000/blogs";

/** Метод HTTP для запроса данных с сервера
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const GET = 'GET';

/** Метод HTTP для обновления данных на сервере
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const PUT = 'PUT';

/** Метод HTTP для отправки данных на сервер
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const POST = 'POST';

/** Метод HTTP для удаления данных с сервера
 *  @memberof module:constants
 *  @export
 *  @constant {string}
 */
export const DELETE = 'DELETE';

/** Массив доступных HTTP-методов
 *  @memberof module:constants
 *  @export
 *  @constant {string[]}
 */
export const arrayOfMethods = [GET, PUT, POST, DELETE];
