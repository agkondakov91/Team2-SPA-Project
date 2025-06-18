import { getData } from '../../server/script.js';
import { SERVER_URL_DATA } from '../../server/constants.js';

const renderTitles = async () => {
  const response = await getData(SERVER_URL_DATA);

  if (response.error) {
    console.error('Ошибка при загрузке данных:', response.message);
    return;
  }

  const data = response;

  const titleEl = document.querySelector('.section1-title');
  if (titleEl) titleEl.textContent = data.titleSection1;
};

renderTitles();

document.getElementById('section1-tourForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const location = document.querySelector('.section1-form__select').value;
  const dateFrom = document.querySelector('.section1-input-left').value;
  const dateTo = document.querySelector('.section1-input-right').value;
  const participants = document.querySelector(
    '.section1-form__select--participants'
  ).value;

  let errors = [];

  if (!location) errors.push('Выберите локацию');
  if (!dateFrom || !dateTo || new Date(dateFrom) > new Date(dateTo))
    errors.push('Укажите корректный диапазон дат');
  if (!participants || +participants < 4) errors.push('Минимум 4 участника');

  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    // this.submit(); // настоящая отправка
  }
});

// Рендер и открытие попапа
const openPopup = async () => {
  const response = await getData(SERVER_URL_DATA);
  if (response.error) {
    console.error('Ошибка при загрузке данных:', response.message);
    return;
  }

  const data = response;

  const tour = data.dataSection1_2[0];
  const direction = tour.tourDirections[0];

  document.getElementById('section1-popupTourName').textContent = tour.tourName;
  document.getElementById('section1-popupTourId').textContent = tour.tourId;
  document.getElementById('section1-popupDirName').textContent = direction.dirName;
  document.getElementById('section1-popupDirPrice').textContent = direction.dirPrice;
  document.getElementById('section1-popupDirDescription').textContent = direction.dirDescription;

  document.getElementById('section1-tourPopup').style.display = 'flex';
};

// Открытие попапа по клику на кнопку
document
  .querySelector('.section1-form__button')
  .addEventListener('click', openPopup);


// Закрытие по кнопке
function closePopup() {
  document.getElementById('section1-tourPopup').style.display = 'none';
}

// Закрытие по клику вне окна
function overlayClose(event) {
  const content = document.getElementById('section1-popupContent');
  if (!content.contains(event.target)) {
    closePopup();
  }
}

// Закрытие по Esc
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closePopup();
  }
});

// Обработчики событий для закрытия попапа
document.getElementById('section1-tourPopup').addEventListener('click', overlayClose);
document.getElementById('section1-popupClose').addEventListener('click', closePopup);
