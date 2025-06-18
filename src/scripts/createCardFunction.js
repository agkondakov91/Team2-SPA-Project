const container = document.querySelector('.section4-photo');
const template = document.querySelector('.template').content;

export function createCardPopularDirection(photo, rating, h2, prise, story) {
  if (template) {
    const form = template.cloneNode(true);
    container.append(form);

    //Фон
    container.lastElementChild.querySelector('.section4-photo-item-photo').src =
      photo;

    //Рейтинг
    container.lastElementChild.querySelector(
      '.section4-photo-rating'
    ).innerHTML = rating;

    //Заголовок
    container.lastElementChild.querySelector('h2').innerHTML = h2;

    //Цена
    container.lastElementChild.querySelector(
      '.section4-photo-item-information-price'
    ).innerHTML = prise;

    //История
    container.lastElementChild.querySelector(
      '.section4-photo-item-information-story'
    ).innerHTML = story;
  } else {
    console.error('Шаблон не загружен!');
  }
}
