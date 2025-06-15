document.getElementById("tourForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.querySelector(".section1-form__select").value;
  const dateFrom = document.querySelector(".section1-input-left").value;
  const dateTo = document.querySelector(".section1-input-right").value;
  const participants = document.querySelector(".section1-form__select--participants").value;

  let errors = [];

  if (!location) errors.push("Выберите локацию");
  if (!dateFrom || !dateTo || new Date(dateFrom) > new Date(dateTo))
    errors.push("Укажите корректный диапазон дат");
  if (!participants || +participants < 4)
    errors.push("Минимум 4 участника");

  if (errors.length > 0) {
    alert(errors.join("\n"));
  } else {
    // тут можно отправить форму или показать модальное окно
    alert("Форма успешно отправлена!");
    // this.submit(); // если нужна настоящая отправка
  }
});
