const sendBtn = document.querySelector('.section7-button');
const form = document.querySelector('.section7-form');
const emailInput = document.querySelector('.section7-email-input');

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
