import { api } from "./api.js";
import { POST, DELETE, PUT, UPDATE, REMOVE } from "./constants.js";
import { genUniqeId } from "./general.js";

// получение всех данных
export const getData = async () => {
  const data = await api();
  return data;
}

// получение данных по id
export const getDataById = async (id) => {
  const data = await getData();
  const findElement = data.find(element => element.id === id);
  return findElement;
};

// добавление данных
export const addData = async () => {
  const newElement = {
    id: genUniqeId(5),
    text: 'New todo',
    completed: false
  };

  await api(POST, {body: newElement});

  const changeData = await getData();
  return changeData;
}

// обновление данных 
export const updateData = async (id = "71411") => {
  const singleData = getDataById(id);
  singleData.id = id;
  singleData.text = "Eat&Eat";
  singleData.completed = !singleData.completed;

  await api(PUT, {id, body: singleData});
  const changeData = await getData();
  return changeData;
}

// удаление данных
export const removeData = async (id = "43115") => {
  await api(DELETE, {id});
  const changeData = await getData();
  return changeData;
}