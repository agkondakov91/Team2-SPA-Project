import { SERVER_URL_DATA } from '../../server/constants.js';
import { getData } from '../../server/script.js';

const data = await getData(SERVER_URL_DATA);

const locationSelect = document.querySelector('.section1-form__select');
const tourSubtitle = document.querySelector('.section-2-subtitle-data');
const tourTitle = document.querySelector('.section-2-title-data');
const tourDescription = document.querySelector('.section-2-description-data');

locationSelect.addEventListener('change', function() {
    const selectedLocation = locationSelect.value;

    if (selectedLocation === 'altai') {
      tourSubtitle.textContent = data.dataSection1_2[1].subtitleSection2;
      tourTitle.textContent = data.dataSection1_2[1].titleSection2;
      tourDescription.textContent = data.dataSection1_2[1].tourDescription;
    } 
    else if (selectedLocation === 'baikal') {
      tourSubtitle.textContent = data.dataSection1_2[0].subtitleSection2;
      tourTitle.textContent = data.dataSection1_2[0].titleSection2;
      tourDescription.textContent = data.dataSection1_2[0].tourDescription;
    } 
    else if (selectedLocation === 'kamchatka') {
      tourSubtitle.textContent = data.dataSection1_2[2].subtitleSection2;
      tourTitle.textContent = data.dataSection1_2[2].titleSection2;
      tourDescription.textContent = data.dataSection1_2[2].tourDescription;
    }
    else {
      tourSubtitle.textContent = 'Информация о туре не найдена';
      tourTitle.textContent = '';
      tourDescription.textContent = '';
    }
  });


const tourProgramButton = document.querySelector('.section-2-btn-tour');

function showTourProgram(location) {
  const popup = document.createElement('div');
  popup.classList.add('popup-section-2');

  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content-section-2');

  const closeButton = document.createElement('button');
  closeButton.classList.add('popup-close-section-2');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(popup);
  });

  let tourName = '';
  let tourDescription = '';
  let dirProgram = [];

  if (location === 'altai') {
    tourName = data.dataSection1_2[1].tourDirections[0].dirName;
    tourDescription = data.dataSection1_2[1].tourDirections[0].dirDescription;
    dirProgram = data.dataSection1_2[1].tourDirections[0].dirProgram;
  } else if (location === 'baikal') {
    tourName = data.dataSection1_2[0].tourDirections[0].dirName;
    tourDescription = data.dataSection1_2[0].tourDirections[0].dirDescription;
    dirProgram = data.dataSection1_2[0].tourDirections[0].dirProgram;
  } else if (location === 'kamchatka') {
    tourName = data.dataSection1_2[2].tourDirections[0].dirName;
    tourDescription = data.dataSection1_2[2].tourDirections[0].dirDescription;
    dirProgram = data.dataSection1_2[2].tourDirections[0].dirProgram;
  } else {
    tourName = 'Информация о туре не найдена';
    tourDescription = '';
    dirProgram = [];
  }

  const title = document.createElement('h3');
  title.classList.add('section-2-title');
  title.textContent = tourName;

  const description = document.createElement('p');
  description.classList.add('section-2-text');
  description.textContent = tourDescription;

  const programList = document.createElement('ul');
  dirProgram.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item.name;
    programList.appendChild(listItem);
  });

  popupContent.appendChild(closeButton);
  popupContent.appendChild(title);
  popupContent.appendChild(description);
  popupContent.appendChild(programList);
  popup.appendChild(popupContent);

  document.body.appendChild(popup);
}

tourProgramButton.addEventListener('click', function(event) {
  event.preventDefault();
  const selectedLocation = locationSelect.value;
  showTourProgram(selectedLocation);
});
