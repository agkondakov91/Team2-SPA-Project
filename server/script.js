/** @module script
 * Модуль для вызова HTTP-методов.
 */

import { api } from './api.js';

import { POST, DELETE, PUT, GET } from './constants.js';
import { SERVER_URL_DATA, SERVER_URL_BLOGS } from './constants.js';

import { genUniqueId } from './general.js';

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

const data = await getData(SERVER_URL_DATA);

//const titleSection1 = data.titleSection1; // заголовок Секции 1
const { titleSection1 } = data;
console.log(titleSection1, "\n");

for (let i = 0; i < data.dataSection1_2.length; i++) {
  console.log(i + 1, data.dataSection1_2[i].tourName); // список "Локация для тура"
}
console.log("\n");
// по кнопке "Найти программу"
const direction = data.dataSection1_2[0].tourDirections // массив направлений по выбранной локации

for (let i = 0; i < direction.length; i++) {
  console.log(i + 1, direction[i].dirName); // направления по выбранной локации
}
console.log("\n");

const titleSection2 = data.dataSection1_2[0].titleSection2; //заголовок Секции 2
console.log('Заголовок секции2: ', titleSection2);

const subtitleSection2 = data.dataSection1_2[0].subtitleSection2; //подзаголовок Секции 2
console.log('Подзаголовок секции 2: ', subtitleSection2, "\n");

const textSection2 = data.dataSection1_2[0].tourStructure; // структура туров выбранного направления
console.log('Структура тура: ', textSection2, "\n");

// по кнопке "Программа тура"
const program = direction[0].dirProgram; //  прграмма ппервого направления  по выбранной локации
for (let i = 0; i < program.length; i++) {
  console.log(i + 1, program[i].name); //
}
console.log("\n");

const titleSection3 = data.dataSection3.titleSection3 // заголовок Секции 3
console.log('Заголовок секции 3: ',titleSection3);

const subtitleSection3 = data.dataSection3.subtitleSection3 // подзаголовк секции 3
console.log('Подзаголовк секции 3:', subtitleSection3, "\n");

const baseServices = data.dataSection3.baseServices;
for (let i = 0; i < baseServices.length; i++) {
  console.log(i + 1, baseServices[i].name); 
  console.log(baseServices[i].description); 
}
console.log("\n");

const titleSection4 = data.dataSection4.titleSection4; // заголовок Секции 4
console.log('Заголовок секции 4: ',titleSection4);

const subtitleSection4 = data.dataSection4.subtitleSection4 // подзаголовк секции 4
console.log('Подзаголовк секции 4:', subtitleSection4, "\n");

// данные для Секции 4
const dataSectrion4 = [];
dataSectrion4[0] = {
  "tourName": data.dataSection1_2[0].tourDirections[1].dirName,
  "tourDescription": data.dataSection1_2[0].tourDirections[1].dirDescription,
  "tourPrice": data.dataSection1_2[0].tourDirections[1].dirPrice,
};
dataSectrion4[1] = {
  "tourName": data.dataSection1_2[1].tourDirections[0].dirName,
  "tourDescription": data.dataSection1_2[1].tourDirections[0].dirDescription,
  "tourPrice": data.dataSection1_2[1].tourDirections[0].dirPrice,
};
dataSectrion4[2] = {
  "tourName": data.dataSection1_2[2].tourDirections[4].dirName,
  "tourDescription": data.dataSection1_2[2].tourDirections[4].dirDescription,
  "tourPrice": data.dataSection1_2[2].tourDirections[4].dirPrice,
};
console.log('Данные секции 4: ', dataSectrion4);

// БЛОГ
// получение данных для блога
const blogs = await getData(SERVER_URL_BLOGS);

const titleBlogs = blogs.titleBlogs; // заголовок для Секции 5 - Блог
console.log('Подзаголовк секции 3:', titleBlogs, "\n");

const subtitleBlogs = blogs.subtitleBlogs; // подзаголовок для Секции 5 - Блог
console.log('Подзаголовк секции 3:', subtitleBlogs, "\n");

const dataBlogs = blogs.dataBlogs; // данные блога о путешествиях
for (let i = 0; i < dataBlogs.length; i++) {
  console.log(i + 1, dataBlogs[i].blogName); 
  console.log(dataBlogs[i].blogText); 
}
console.log("\n");

//console.log(data);
//getDataById (SERVER_URL_PICTURES_SECOND, '101');
// const add = await addData(SERVER_URL_TODOS, addElement);
// console.log(add);
// const data = await getData(SERVER_URL_TODOS);
// console.log(data);
// updateData(SERVER_URL_PICTURES_SECOND, updateData);
 //removeData(SERVER_URL_PICTURES_SECOND, '11135');