import { SERVER_URL_DATA } from "../../server/constants";

// Функция получения данных (замените на вашу реальную функцию)
const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return { error: true, message: error.message };
  }
};

const updateSection2 = (data, selectedLocation) => {
  if (!data || !data.data || !data.data.dataSection1_2) {
    console.error("Неверный формат данных для обновления второй секции.");
    return;
  }

  const tour = data.data.dataSection1_2.find(
    (tour) => tour.tourName.toLowerCase() === selectedLocation.toLowerCase()
  );

  if (!tour) {
    console.warn("Тур для локации", selectedLocation, "не найден.");
    return;
  }

  document.querySelector(".section-2-title").textContent = tour.titleSection2;
  document.querySelector(".section-2-subtitle").textContent = tour.subtitleSection2;
  document.querySelector(".section-2-text").textContent = tour.tourDescription;

  // Обновляем текст по кнопке
  document.querySelector(".section-2-btn-tour").textContent = tour.tourStructure;

  //Здесь можно добавить обновление картинок(если нужны):
  // document.querySelector(".section-2-img-1").src = tour.image1Src;
  // document.querySelector(".section-2-img-1").alt = tour.image1Alt;
  // document.querySelector(".section-2-img-2").src = tour.image2Src;
  // document.querySelector(".section-2-img-2").alt = tour.image2Alt;
};

document.addEventListener("DOMContentLoaded", () => {
  const locationSelect = document.querySelector(".section1-form__select");

  locationSelect.addEventListener("change", async (event) => {
    const selectedLocation = event.target.value;
    const data = await getData(SERVER_URL_DATA);

    if (data.error) {
      console.error("Ошибка при получении данных:", data.message);
      return;
    }

    updateSection2(data, selectedLocation);
  });

  // Инициализация при загрузке страницы
  (async () => {
    const initialLocation = locationSelect.value;
    const initialData = await getData(SERVER_URL_DATA);

    if (initialData.error) {
      console.error("Ошибка при получении начальных данных:", initialData.message);
      return;
    }

    updateSection2(initialData, initialLocation);
  })();
});

