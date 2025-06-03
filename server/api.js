/** @module api
 *  Модуль для реализации HTTP-методов.
 */

import  { POST, DELETE, PUT, GET, arrayOfMethods } from "./constants.js";

/** @extends Error
 * Класс представляющий расширение стандартного класса Error
 */
class extendError extends Error {
    /**
     * @param {string} message - Сообщение от стандартного объекта Error.
     * @param {string} code - Код состояния HTTP, полученный от сервера в ответ на запрос.
     * @param {string} status - Сообщение, соответствующее коду состояния HTTP.
     * @param {string} details - Делали объекта об ошибе.
     * @param {string} name - Имя класса.
     */
  constructor (message, code = null, status = null, details = null) {
    super(message);
    this.code = code;
    this.status = status;
    this.details = details;
    this.name = 'extendError';
    this.message = message;
  };
};

/** Функция реализации HTTP-методов
 * @memberof module:script
 * @exports
 * @function
 * @name api
 * @param {string} endpoint - Адрес, по которому находятся данные.
 * @param {string} method - HTTP-метод.
 * 
 * @typedef {Object} Payload 
 * @property {string} id - id объекта данных.
 * @property {Object} body - Свойства объекта данных.
 * 
 * @param {Payload} payload - Объект данных для отправки, обновления для удаления с сервера. 
 * 
 * @returns {Object[]|Object } data - Массив объектов полученных данных или объект полученных по if,
 *                                    добаленных, обновленных или удаленных данных.
 * 
 * @typedef {Object} Error
 * @property {boolean} error - принимает true, если ошибка произошла. 
 * @property {number} code - код состояния HTTP ответа.
 * @property {string} status - сообщение о состоянии, соответствующее коду состояния HTTP.
 * @property {string} message - сообщение, описывающее произошедшую ошибку.
 * 
 * @throws {Error} - Ошибка возникнет, если не передан endpoint,
 *                   или id элемента для поиска неопределен
 *                   или тип id некорректный.
*/
export const api = async (endpoint, method, payload) => {
  try {
    let config = {};

    if (!arrayOfMethods.includes(method)) throw new Error('Переданный метод не поддерживается');  

    config = {
      method,
      headers: {
        'Content-Type' : 'application/json',
      }
    }

    if (method === POST || method === PUT) {
      config.body = JSON.stringify(payload.body);
    }

    if (method === DELETE || method === PUT) {
      endpoint = `${endpoint}/${payload.id}`;
    }    

    const response = await fetch(endpoint, config);

    if (!response.ok) {
      throw new extendError (null, response.status, response.statusText);
    };

    const messages = {
      POST: 'Data has been added',
      DELETE: 'Data has been removed',
      PUT: 'Data has been update',
      GET: 'Data has been received', 
    }

    console.log(messages[method] || messages.default);

    const data = await response.json(); 
    return data;
  } catch(err) {
      if (err instanceof extendError) {
        err.message = `Response status: ${err.code} - ${err.status}`;
      } else {
         new extendError(err.message, null, null);
      }; 
      return {
        error: true,
        code: err.code,
        status: err.status,
        message: err.message,
      };
  }; 
};  