import { scrollElemWheel } from './scrollFunction.js';
import { SERVER_URL_DATA } from '../../server/constants.js';
import { getData } from '../../server/script.js';

const grid = document.querySelector('.section6-grid');

scrollElemWheel(grid);

const data = await getData(SERVER_URL_DATA);

const titleSection6 = data.dataSection6.titleSection6;
document.querySelector('.section6-title2').innerHTML = titleSection6;

const subtitleSection6 = data.dataSection6.subtitleSection6;
document.querySelector('.section6-title1').innerHTML = subtitleSection6;

const srcPicture1 = data.gallery.image1;
const picture1 = document.querySelector('.section6-picture1');
picture1.setAttribute('src', srcPicture1);

const srcPicture2 = data.gallery.image2;
const picture2 = document.querySelector('.section6-picture2');
picture2.setAttribute('src', srcPicture2);

const srcPicture3 = data.gallery.image3;
const picture3 = document.querySelector('.section6-picture3');
picture3.setAttribute('src', srcPicture3);
const srcPicture4 = data.gallery.image4;
const picture4 = document.querySelector('.section6-picture4');
picture4.setAttribute('src', srcPicture4);

const srcPicture5 = data.gallery.image5;
const picture5 = document.querySelector('.section6-picture5');
picture5.setAttribute('src', srcPicture5);

const srcPicture6 = data.gallery.image6;
const picture6 = document.querySelector('.section6-picture6');
picture6.setAttribute('src', srcPicture6);
