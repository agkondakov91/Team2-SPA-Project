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

  const tourDetails = {
    "baikal": {
      "dirId": "D1",
      "dirName": "По большой Байкальской тропе",
      "dirPrice": "100 400 ₽",
      "dirDescription": "В путешествии вы два дня побудете настоящими скаутами: пройдете по экотропе национального парка вдоль великого озера, переночуете в палатках и будете готовить еду на костре. Вас ждет настоящий поход, поэтому вещи и спальные мешки вы понесете самостоятельно. Программа разработана для семей с детьми от пяти лет — в походе не будет длительных треккингов и сложного рельефа с перепадом высот. А завершите вы его непродолжительным сплавом по Ангаре — здесь спокойное течение, даже дети легко осилят маршрут. А также в туре будут интересные как детям, так и взрослым лекции и купание в прохладных водах Байкала.",
      "dirProgram": [
        { "id": 1, "name": "Обзорная экскурсия по Иркутску." },
        { "id": 2, "name": "Начало похода по Большой Байкальской тропе вдоль озера до кордона национального парка (16 км пешком)." },
        { "id": 3, "name": "Продолжение похода вдоль западного берега Байкала, посетите мыс Соболева, «Чертов мост» и мыс шкипер. (9 км пешком)." },
        { "id": 4, "name": "Финальная часть похода - поселок Большие Коты, где вас ждет экскурсия в музее байкаловедения, затем на катере доберетесь до поселка Листвянка. (4 км пешком и 20 км на катере))." },
        { "id": 5, "name": "Мастер-класс по сбору байдарок и сплав по ангаре до поселка Большая Речка." },
        { "id": 6, "name": "Посещение музея под открытым небом «Тальцы»." },
        { "id": 7, "name": "Экскурсия с интерактивный программой «Сибирские забавы»." }
      ]
    },
    "altai": {
      "dirId": "A1",
      "dirName": "Алтайские горизонты",
      "dirPrice": "66 700 ₽",
      "dirDescription": "За время путешествия по Горному Алтаю вы увидите красоты Чуйского тракта, спуститесь в долину Чулышмана и пройдете к водопаду Куркуре. Поднимитесь к леднику Большой Актру и, если позволит физическая подготовка, то увидите Голубое озеро на высоте 2840 метров. Вас ждет ежедневный треккинг до 15 км и переезды до 400 км по горным дорогам. Вы будете жить в туристических комплексах с удобствами, в окружении гор и долин.",
      "dirProgram": [
        { "id": 1, "name": "Размещение в туркомплексе возле села Чибит." },
        { "id": 2, "name": "Экскурсия в долину Чульшмана и водопад Куркуре." },
        { "id": 3, "name": "Куектанарске озера." },
        { "id": 4, "name": "Трекинг к языку ледника Большой Актру." },
        { "id": 5, "name": "Чуйский тракт и Алтайский Марс." }
      ]
    },
    "kamchatka": {
      "dirId": "K1",
      "dirName": "Классическая Карелия",
      "dirPrice": "70 600 ₽",
      "dirDescription": "Мы подготовили для вас программу знакомства с заповедными уголками Карелии с необычным проживанием — в современном комфортном глэмпинге на острове в самом сердце Ладожских шхер. Днем вас ждут экскурсии, пешие и водные прогулки в сопровождении профессиональных гидов. А вечером — отдых в уютных шатрах-полусферах в окружении соснового леса, звездное небо над Ладогой и дегустация блюд карельской кухни в изысканной подаче. Программа понравится любителям комфортного экскурсионного отдыха. Переезды будут минимальными, а экскурсии позволят в полном объеме познакомиться с главными природными и историческими достопримечательностями Карелии.",
      "dirProgram": [
        { "id": 1, "name": "Остров-заповедник Кижи." },
        { "id": 2, "name": "Валаамский архипелаг." },
        { "id": 3, "name": "Ладожские шхеры и горный парк «Рускеала»" }
      ]
    }
  };


const tourProgramButton = document.querySelector('.section-2-btn-tour');

function showTourProgram(location) {
    const selectedTour = tourDetails[location];

    if (!selectedTour) {
      alert('Информация о программе тура для выбранной локации не найдена.');
      return;
    }

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

    const title = document.createElement('h3');
    title.classList.add('section-2-title');
    title.textContent = selectedTour.dirName;``

    const description = document.createElement('p');
    description.classList.add('section-2-text')
    description.textContent = selectedTour.dirDescription;

    const programList = document.createElement('ul');
    selectedTour.dirProgram.forEach(item => {
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