const container = document.querySelector('.section4-photo');
const template = document.querySelector('.template').content;

export function createCardPopularDirection(
  rating,
  h2,
  p,
  prise,
  story,
  button
) {
  if (template) {
    const form = template.cloneNode(true);
    container.append(form);

    //Рейтинг
    container.lastElementChild.querySelector(
      '.section4-photo-rating'
    ).innerHTML = rating;

    //Заголовок
    container.lastElementChild.querySelector('h2').innerHTML = h2;

    //подзаголовок
    container.lastElementChild.querySelector(
      '.section4-photo-item-information-visible-p'
    ).innerHTML = p;

    //Цена
    container.lastElementChild.querySelector(
      '.section4-photo-item-information-price'
    ).innerHTML = prise;

    //История
    container.lastElementChild.querySelector(
      '.section4-photo-item-information-story'
    ).innerHTML = story;

    //Кнопка
    container.lastElementChild.querySelector(
      '.section4-button-story'
    ).innerHTML = button;
  } else {
    console.error('Шаблон не загружен!');
  }
}
