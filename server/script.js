/** @module script
 * Модуль для вызова HTTP-методов.
 */

import { api } from './api.js';

import { POST, DELETE, PUT, GET } from './constants.js';
// import { SERVER_URL_PICTURES_SECOND } from './constants.js';

// import { genUniqueId } from './general.js';

/** Функция получения всех данных с сервера.
 * @memberof module:script
 * @exports
 * @function
 * @name getData
 *
 * @param {string} endpoint - Адрес конкретного набора данных для получения.
 *
 * @returns {Object[]} data - Массив объектов данных, находящихся на сервере по определенному ендпоинту.
 *
 * @typedef {Object} Error
 * @property {boolean} error - Признак возникновения ошибки.
 * @property {string} message - Сообщение, описывающее ошибку.
 *
 * @throws {Error} - Ошибка возникнет, если не передан endpoint.
 */
export const getData = async (endpoint) => {
  try {
    if (!endpoint) throw Error('Источник данных не определен');

    const data = await api(endpoint, GET);
    return data;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};
/** Функция получения данных с сервера по определенному id.
 * @memberof module:script
 * @exports
 * @function
 * @name getDataById
 * @param {string} endpoint - Адрес конкретного набора данных для получения.
 * @param {string} id - id объекта для поиска на сервере.
 *
 * @typedef {Object} Data
 * @property {string} id - id объекта данных.
 * @property {string} text - содержание объекта данных.
 * @property {boolean} completed - признак истинности в объекте данных.
 *
 * @returns {Data} data - Найденный объект данных.
 *
 * @typedef {Object} Error
 * @property {boolean} error - Признак возникновения ошибки.
 * @property {string} message - Сообщение, описывающее ошибку.
 *
 * @throws {Error} - Ошибка возникнет, если не передан endpoint,
 *                   или id элемента для поиска не определён,
 *                   или тип id некорректный.
 */
export const getDataById = async (endpoint, id) => {
  try {
    if (!endpoint) throw Error('Источник данных не определен');
    if (!id) {
      throw new Error('id элемента для поиска не определен');
    }
    if (typeof id !== 'string') {
      throw new Error('Некорректный тип id');
    }

    const data = await api(`${endpoint}/${id}`, GET);
    return data;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};
/** Функция добавления данных на сервер.
 * @memberof module:script
 * @exports
 * @function
 * @name addData
 *
 * @typedef {Object} NewData
 * @property {string} id - id объекта данных.
 * @property {string} text - содержание объекта данных.
 * @property {boolean} completed - признак истинности в объекте данных.
 *
 * @param {string} endpoint - Адрес конкретного набора данных, в который надо добавить данные.
 * @param {NewData} newData - Объект с данными для добавления в конкретный ендпоинт.
 *
 * @returns {newData} data - Объект с добавленными данными.
 *
 * @typedef {Object} Error
 * @property {boolean} error - Признак возникновения ошибки.
 * @property {string} message - Сообщение, описывающее ошибку.
 *
 * @throws {Error} - Ошибка возникнет, если не передан endpoint,
 *                   или данные для добавления не определены,
 *                   или тип данных для добавления некорректен,
 *                   или значения для добавления не определены (передан пустой объект).
 */
export const addData = async (endpoint, newData) => {
  try {
    if (!endpoint) throw Error('Источник данных не определен');

    if (!newData) {
      throw new Error('Данные для добавления не определены');
    }

    if (typeof newData !== 'object') {
      throw new Error('Некорректный тип данных для добавления');
    }

    if (Object.keys(newData).length === 0) {
      throw new Error('Значения данных для добавления не определены');
    }

    const data = await api(endpoint, POST, { body: newData });
    return data;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};
/** Функция обновления данных на сервере.
 * @memberof module:script
 * @exports
 * @function
 * @name updateData
 *
 * @typedef {Object} UpdateElement- Объект с данными для обновления на сервере.
 * @property {string} id - id объекта данных.
 * @property {string} text - содержание объекта данных.
 * @property {boolean} completed - признак истинности в объекте данных.
 *
 * @param {string} endpoint - Адрес конкретного набора данных, в котором надо обновить данные.
 * @param {UpdateElement} updateElement - Объект с данными для обновления в конкретном ендпоинте.
 *
 * @returns {UpdateElement} data -Объект с обновленными данными.
 *
 * @typedef {Object} Error
 * @property {boolean} error - Признак возникновения ошибки.
 * @property {string} message - Сообщение, описывающее ошибку.
 *
 * @throws {Error} - Ошибка возникнет, если не передан endpoint,
 *                   или данные для обновления не определены,
 *                   или тип данных для обновления некорректен,
 *                   или значения для обновления не определены (передан пустой объект).
 */
export const updateData = async (endpoint, updateElement) => {
  try {
    if (!endpoint) throw Error('Источник данных не определен');
    if (!updateElement) throw new Error('Данные для обновления не определены');

    if (typeof updateElement !== 'object')
      throw new Error('Некорректный тип данных для обновления');

    if (Object.keys(updateElement).length === 0)
      throw new Error('Значения данных для обновления не определены');

    const id = updateElement.id;
    const data = await api(endpoint, PUT, { id, body: updateElement });
    return data;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};
/** Функция удаления данных с сервера.
 * @memberof module:script
 * @exports
 * @function
 * @name removeData
 *
 * @param {string} endpoint - Адрес конкретного набора данных, в котором надо удалить данные.
 * @param {string} id - id объекта для удаления на сервере.
 *
 * @typedef {Object} Data - Удаляемый объект данных.
 * @property {string} id - id объекта данных.
 * @property {string} text - содержание объекта данных.
 * @property {boolean} completed - признак истинности в объекте данных.
 *
 * @returns {Data} data - Удаленный объект данных.
 *
 * @typedef {Object} Error
 * @property {boolean} error - Признак возникновения ошибки.
 * @property {string} message - Сообщение, описывающее ошибку.
 *
 * @throws {Error} - Ошибка возникнет, если не передан endpoint,
 *                   или id элемента для поиска неопределен,
 *                   или тип id некорректный.
 */
export const removeData = async (endpoint, id) => {
  try {
    if (!endpoint) throw Error('Источник данных не определен');
    if (!id) {
      throw new Error('id элемента для удаления не определен');
    }
    if (typeof id !== 'string') {
      throw new Error('Некорректный тип id');
    }

    const data = await api(endpoint, DELETE, { id });
    return data;
  } catch (err) {
    return {
      error: true,
      message: err.message,
    };
  }
};

// const addElement = {
//   id: genUniqueId(5),
//   text: 'Add data with description',
//   completed: false,
// };

// const updateElement = {
//   id: '100',
//   descripton: 'Update data',
//   completed: true,
// };

// getData(SERVER_URL_PICTURES_SECOND);
// getDataById(SERVER_URL_PICTURES_SECOND, '101');
// addData(SERVER_URL_PICTURES_SECOND, addElement);
// updateData(SERVER_URL_PICTURES_SECOND, updateElement);
// removeData(SERVER_URL_PICTURES_SECOND, '11135');
