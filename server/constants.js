/** @modue constants
 * Модуль определения переменных для HTTP-методов и ендпоинтов.
 */

/** Адрес основного ендпоинта
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const SERVER_URL_TODOS = "http://localhost:3000/todos";

/** Адрес первго ендпоинта со ссылками на изображения  
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const SERVER_URL_PICTURES_FIRST = "http://localhost:3000/pictures_first";

/** Адрес второго ендпоинта со ссылками на изображения 
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const SERVER_URL_PICTURES_SECOND = "http://localhost:3000/pictures_second";

/** Метод HTTP для запроса данных с сервера 
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const GET = 'GET';

/** Метод HTTP для обновления данных на сервере  
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const PUT = 'PUT';

/** Метод HTTP для отправки данных на сервер
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const POST = 'POST';

/** Метод HTTP для удаления данных с сервера 
 *  @memberof modue:constants 
 *  @export
 *  @constant {string} 
 */
export const DELETE = 'DELETE';

/** Массив доступных HTTP-методов 
 *  @memberof modue:constants 
 *  @export
 *  @constant {string[]} 
 */
export const arrayOfMethods = [GET, PUT, POST, DELETE];