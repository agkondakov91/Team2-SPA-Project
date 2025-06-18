import { scrollElemWheel } from './scrollFunction.js';
import { createCardPopularDirection } from './createCardFunction.js';

const container = document.querySelector('.section4-photo');

scrollElemWheel(container);

/////////////////////////////////////////////////////////////////////////////////////////////

import { SERVER_URL_DATA } from '../../server/constants.js';
import { getData } from '../../server/script.js';

const data = await getData(SERVER_URL_DATA);

const titleSection4 = data.dataSection4.titleSection4; // заголовок Секции 4
document.querySelector('.section4-title2').innerHTML = titleSection4;

const subtitleSection4 = data.dataSection4.subtitleSection4; // подзаголовок секции 4
document.querySelector('.section4-title1').innerHTML = subtitleSection4;

/////////////////////////////////////////////////////////////////////////////////////////////

const dataSectrion4 = [];
dataSectrion4[0] = {
  tourName: data.dataSection1_2[0].tourDirections[3].dirName,
  tourDescription: data.dataSection1_2[0].tourDirections[3].dirDescription,
  tourPrice: data.dataSection1_2[0].tourDirections[3].dirPrice,
  tourImage: data.dataSection1_2[0].tourDirections[3].image1,
  tourRating: data.dataSection1_2[0].tourDirections[3].dirRating,
};
dataSectrion4[1] = {
  tourName: data.dataSection1_2[1].tourDirections[0].dirName,
  tourDescription: data.dataSection1_2[1].tourDirections[0].dirDescription,
  tourPrice: data.dataSection1_2[1].tourDirections[0].dirPrice,
  tourImage: data.dataSection1_2[1].tourDirections[0].image1,
  tourRating: data.dataSection1_2[1].tourDirections[0].dirRating,
};
dataSectrion4[2] = {
  tourName: data.dataSection1_2[2].tourDirections[0].dirName,
  tourDescription: data.dataSection1_2[2].tourDirections[0].dirDescription,
  tourPrice: data.dataSection1_2[2].tourDirections[0].dirPrice,
  tourImage: data.dataSection1_2[2].tourDirections[0].image1,
  tourRating: data.dataSection1_2[2].tourDirections[0].dirRating,
};

console.log(dataSectrion4[0].tourName);
createCardPopularDirection(
  dataSectrion4[0].tourImage,
  dataSectrion4[0].tourRating,
  dataSectrion4[0].tourName,
  dataSectrion4[0].tourPrice,
  dataSectrion4[0].tourDescription
);
createCardPopularDirection(
  dataSectrion4[1].tourImage,
  dataSectrion4[1].tourRating,
  dataSectrion4[1].tourName,
  dataSectrion4[1].tourPrice,
  dataSectrion4[1].tourDescription
);
createCardPopularDirection(
  dataSectrion4[2].tourImage,
  dataSectrion4[2].tourRating,
  dataSectrion4[2].tourName,
  dataSectrion4[2].tourPrice,
  dataSectrion4[2].tourDescription
);
