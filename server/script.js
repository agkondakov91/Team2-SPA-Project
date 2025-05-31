import { api } from "./api.js";

import { POST, DELETE, PUT, GET } from "./constants.js";
import  { SERVER_URL_TODOS, SERVER_URL_PICTURES_FIRST, 
          SERVER_URL_PICTURES_SECOND } from "./constants.js";

import { genUniqeId } from "./general.js";

// получение всех данных
export const getData = async (endpoint) => {
  try {
    if (!endpoint) throw Error ('Источник данных не определен');

    const data = await api(endpoint);
    return data;
    } catch(err) {
      return {
        error: true,
        error: err.message,             
      };
    }  
}

// получение данных по id
export const getDataById = async (endpoint, id) => {
    try {
      if (!endpoint) throw Error ('Источник данных не определен');
      if (!id) {
        throw new Error ('id элемента для поиска неопределен');
      };
      if (typeof id !== "string") {
        throw new Error ('Некорректный тип id');
      } 

      const data = await api(`${endpoint}/${id}`);
      return data;
    } catch(err) {
      return {
        error: true,
        error: err.message,             
      };
    };
  };
  
// добавление данных
export const addData = async (endpoint, newData) => {
  try {
    if (!endpoint) throw Error ('Источник данных не определен');

    if (!newData) {
      throw new Error('Данные для добавления не определены');
    }; 

    if (typeof newData !== "object") {
      throw new Error('Некорректный тип данных для добавления');
    }  

    if (Object.keys(newData).length === 0) {
      throw new Error('Значения данных для добавления не определены');
    }; 

    const data = await api(endpoint, POST, { body: newData });
    return data;
  } catch(err) {
    return {
      error: true,
      message: err.message       
    };
  }  
};

// обновление данных 
export const updateData = async (endpoint, newData) => {
  try {
    if (!endpoint) throw Error ('Источник данных не определен');
    if (!newData) 
      throw new Error('Данные для обновления не определены');
    
    if (typeof newData !== 'object')
      throw new Error('Некорректный тип данных для обновления');

    if (Object.keys(newData).length === 0) 
      throw new Error('Значения данных для обновления не определены');

    const id = newData.id;
    const data =  await api(endpoint, PUT, { id, body: newData });
    return data;
  } catch(err) {
    return {
      error: true,
      message: err.message,             
    };
  };
};

// удаление данных
export const removeData = async (endpoint, id) => {
  try {
    if (!endpoint) throw Error ('Источник данных не определен');
    if (!id) throw new Error('id элемента для удаления не неопределен');
    const data = await api(endpoint, DELETE, {id});
    return  data;
  } catch(err) {
    return {
      error: true,
      message: err.message,             
    };
  }
};

// const addElement = {
//   id: genUniqeId(5),
//   text: 'Add data with description',
//   completed: false
// };

// const updateElement = {
//   id: "53103",
//   descripton: "Update description data",
//   completed: true
// } 
//getData(SERVER_URL_PICTURES_SECOND);
// getDataById (SERVER_URL_PICTURES_SECOND, '101');
// addData(SERVER_URL_PICTURES_FIRST, addElement);
// updateData(SERVER_URL_PICTURES_FIRST, updateElement);
// removeData(SERVER_URL_PICTURES_FIRST, '08411');
