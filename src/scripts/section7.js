const sendBtn = document.querySelector('.section7-button');
const form = document.querySelector('.section7-form');
const emailInput = document.querySelector('.section7-email-input');
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const body = document.body;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isValidEmail(emailInput.value)) {
    alert('Вы подписались на рассылку!');
    emailInput.value = '';
  } else {
    alert('Пожалуйста, введите корректный email.');
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


const tourForm = document.getElementById('tourForm');
const dateInputs = document.querySelectorAll('.section1-form__date');


tourForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Сброс предыдущих ошибок
  dateInputs.forEach(input => input.style.borderColor = 'var(--color-grey)');

  const startDate = new Date(document.querySelector('.section1-input-left').value);
  const endDate = new Date(document.querySelector('.section1-input-right').value);
  const today = new Date();


  // Проверка: даты не в прошлом
  if (startDate < today || endDate < today) {
    dateInputs.forEach(input => input.style.borderColor = 'red');
    return;
  }

  // Если все проверки пройдены — отправьте форму
  alert('Форма успешно отправлена!');
  tourForm.reset(); // Очистить форму
});

// Открытие/закрытие меню по клику на бургер
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
  body.classList.toggle('dis-scroll');
});

// Закрытие меню по клику на крестик
if (menuClose) {
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('dis-scroll');
  });
}

// Закрытие меню по клику на ссылку
document.querySelectorAll('.section1-header__item section1-a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('dis-scroll');
  });
});

