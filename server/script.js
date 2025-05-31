import { api } from "./api.js";
import { POST, DELETE, PUT } from "./constants.js";

// получение всех данных
export const getData = async () => {
  const data = await api();
  return data;
}

// получение данных по id
export const getDataById = async (id) => {
  try {
    if (!id) { throw new Error('id элемента для поиска неопределен') };
  } catch(err) {
    console.error(err.message);
    return null;
  }

  try {
    const data = await getData();
    const findData = data.find(element => element.id === id);
  
    if (!findData) { throw new Error('Элемент не найден') };
    return findData;
  } catch(err) {
    console.error(err.message);
    return null;
  }
};

// добавление данных
export const addData = async (newData) => {
  try {
    if (!newData || Object.keys(newData).length === 0) 
      throw new Error('Данные для добавления не определены');
  } catch(err){
    console.error(err.message);
    return null;
  }
  return await api(POST, {body: newData});
};

// обновление данных 
export const updateData = async (id, newData) => {
  try {
    if (!id) { throw new Error('id элемента для обновления не неопределен') };
  } catch(err) {
    console.error(err.message);
    return null;
  }
  return await api(PUT, {id, body: newData});
};

// удаление данных
export const removeData = async (id) => {
  try {
    if (!id) { throw new Error('id элемента для удаления не неопределен') };
  } catch(err) {
    console.error(err.message);
    return null;
  }
 return  await api(DELETE, {id});
}