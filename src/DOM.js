import { getCurrentDayInfo, timeFormatter, fetchData } from './fetch.js';
import weatherIcon from './images/cloudy.png';
import overcast from './images/overcast.png';
import partialCloud from './images/partial-cloud.png';
import rainy from './images/rainy.png';
import snow from './images/snow.png';
import sunny from './images/sunny.png';
import night from './images/night.png';
import drop from './images/water-drop.png';
//For loading the header image
function loadHeaderImage() {
  const myWeatherIconContainer = document.querySelector(
    '.header>.img-container',
  );
  const myWeatherIcon = document.createElement('img');
  myWeatherIcon.src = weatherIcon;
  myWeatherIconContainer.appendChild(myWeatherIcon);
}
//This function is used for loading weather condition icons based of the uses
function loadContentImages() {
  const overcastIcon = document.createElement('img');
  const partialCloudIcon = document.createElement('img');
  const rainyIcon = document.createElement('img');
  const snowIcon = document.createElement('img');
  const sunnyIcon = document.createElement('img');
  const nightIcon = document.createElement('img');
  const dropIcon = document.createElement('img');

  overcastIcon.src = overcast;
  partialCloudIcon.src = partialCloud;
  rainyIcon.src = rainy;
  snowIcon.src = snow;
  sunnyIcon.src = sunny;
  nightIcon.src = night;
  dropIcon.src = drop;

  return {
    overcastIcon,
    partialCloudIcon,
    rainyIcon,
    snowIcon,
    sunnyIcon,
    nightIcon,
    dropIcon,
  };
}

function importDataToDom(data) {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );

  // The currentDay and currentDayMonthYear variables is getting the date, month and year in a convenient format
  const currentDay = getCurrentDayInfo(data.days[0].datetime).getDayName();
  const currentDayMonthYear = getCurrentDayInfo(
    data.days[0].datetime,
  ).getActualDayMonthYear();
  // myTopRightIcon variable contains the appropriate icon which matches with the current air condition
  const myTopRightIcon = loadIcon(data.currentConditions.conditions);

  topLeftTemp.textContent = `${data.currentConditions.temp} °C`;
  topLeftAddress.textContent = data.resolvedAddress;
  topLeftDate.textContent = `${currentDay}, ${currentDayMonthYear}`;
  topRightTime.textContent = `${timeFormatter(data.currentConditions.datetime).myNewTime} ${timeFormatter(data.currentConditions.datetime).timeIndicator}`;
  topRightCondition.textContent = data.currentConditions.conditions;
  topRightImage.appendChild(myTopRightIcon);
//loads the current day's weather information from the the data fetched from the visual crossing API
  const todayTempInfo = () => {
    let todayInfoIndex = 1;
    let shift = false;
    const bottomDivContainers = document.querySelectorAll(
      '.today-info>.bottom>div',
    );
    const currentTime = data.currentConditions.datetime;
    let index = data.days[0].hours.findIndex(
      (item) => item.datetime === currentTime,
    );
    if (index === -1) {
      index =
        data.days[0].hours.findIndex(
          (item) => item.datetime.slice(0, 2) === currentTime.slice(0, 2),
        ) + 2;
    } else {
      index += 2;
    }
    if (index > 23) {
      index = 0;
      shift = true;
    }
    // console.log(currentTime);
    // console.log(index); 
    bottomDivContainers.forEach(() => {
      const temperature = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
      );
      const imgContainer = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
      );
      const time = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
      );
      const timeIndicator = document.querySelector(
        `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
      );
      if (!shift && index <= 23) {
        temperature.textContent = `${data.days[0].hours[index].temp} °C`;
        const conditionIcon = data.days[0].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = timeFormatter(
          data.days[0].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = timeFormatter(
          data.days[0].hours[index].datetime,
        ).timeIndicator;
      } else {
        temperature.textContent = `${data.days[1].hours[index].temp} °C`;
        const conditionIcon = data.days[1].hours[index].icon;
        const myIcon = loadIcon(conditionIcon);
        imgContainer.appendChild(myIcon);
        time.textContent = data.days[1].hours[index].datetime;
        time.textContent = timeFormatter(
          data.days[1].hours[index].datetime,
        ).myNewTime;
        timeIndicator.textContent = timeFormatter(
          data.days[1].hours[index].datetime,
        ).timeIndicator;
      }
      index += 2;
      todayInfoIndex += 1;
      if (index > 23) {
        if (index - 2 === 23) {
          index = 1;
        } else {
          index = 0;
        }
        shift = true;
      }
    });
  };
//loads the current week's weather information from the the data fetched from the visual crossing API
  const weeklyTempInfo = () => {
    let weeklyInfoIndex = 1;
    const weeklyDivContainers = document.querySelectorAll('.weekly-info>div');

    weeklyDivContainers.forEach(() => {
      const date = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
      );
      const rainPercent = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
      );
      const waterDropIconCont = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
      );
      const conditionIconContainer = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
      );
      const tempMin = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
      );
      const tempMax = document.querySelector(
        `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
      );

      const daysInfo = getCurrentDayInfo(data.days[weeklyInfoIndex].datetime)
        .getDayName()
        .slice(0, 3);
      const daysAndMonthInfo = getCurrentDayInfo(
        data.days[weeklyInfoIndex].datetime,
      ).getActualDayMonth();
      date.textContent = `${daysInfo}, ${daysAndMonthInfo.slice(0, -6)}`;
      rainPercent.textContent = `${data.days[weeklyInfoIndex].precipprob} %`;
      waterDropIconCont.appendChild(loadContentImages().dropIcon);
      tempMin.textContent = data.days[weeklyInfoIndex].tempmin;
      tempMax.textContent = `/${data.days[weeklyInfoIndex].tempmax} °C`;

      const conditionIcon = loadIcon(data.days[weeklyInfoIndex].conditions);
      conditionIconContainer.appendChild(conditionIcon);

      weeklyInfoIndex += 1;
    });
  };

//   console.log(data.days[0]);
//   console.log(data.days[1]);
//   console.log(data.days[2]);
//   console.log(data.days[3]);
  todayTempInfo();
  weeklyTempInfo();
}
//Assigns the right weather condition icon based on the current condition fetched from the API
function loadIcon(conditionIcon) {
  let myIcon;
  if (/Clear/i.test(conditionIcon)) {
    console.log(conditionIcon);
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().sunnyIcon;
    }
  } else if (/Rain/i.test(conditionIcon)) {
    myIcon = loadContentImages().rainyIcon;
  } else if (/partly-cloudy/i.test(conditionIcon)) {
    if (/night/i.test(conditionIcon)) {
      myIcon = loadContentImages().nightIcon;
    } else {
      myIcon = loadContentImages().partialCloudIcon;
    }
  } else if (/Overcast/i.test(conditionIcon) || /Cloudy/i.test(conditionIcon)) {
    myIcon = loadContentImages().overcastIcon;
  } else if (/Snow/i.test(conditionIcon)) {
    myIcon = loadContentImages().snowIcon;
  }

  return myIcon;
}
//Clears all the previous data from the DOM
function clearPreviousContents() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftAddress = document.querySelector(
    '.top-left>.location-container>.location',
  );
  const topLeftDate = document.querySelector(
    '.top-left>.location-container>.date',
  );
  const topRightTime = document.querySelector('.top-right>.time-img>.time');
  const topRightCondition = document.querySelector('.top-right>.condition');
  const topRightImage = document.querySelector(
    '.top-right>.time-img>.img-container',
  );
  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );

  topLeftTemp.innerHTML = '';
  topLeftAddress.textContent = '';
  topLeftDate.innerHTML = '';
  topRightTime.innerHTML = '';
  topRightCondition.innerHTML = '';
  topRightImage.innerHTML = '';

  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const temperature = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const imgContainer = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.img-container`,
    );
    const time = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time`,
    );
    const timeIndicator = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.time-indicator`,
    );

    temperature.innerHTML = '';
    imgContainer.innerHTML = '';
    time.innerHtml = '';
    timeIndicator.innerHtml = '';

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;

  weeklyInfoDivContainers.forEach(() => {
    const date = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.date`,
    );
    const rainPercent = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .rain-percent`,
    );
    const waterDropIconCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .water-drop`,
    );
    const conditionIconContainer = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.img-container`,
    );
    const tempMin = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.min`,
    );
    const tempMax = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"]>.temp>.max`,
    );

    date.innerHTML = '';
    rainPercent.innerHtml = '';
    waterDropIconCont.innerHTML = '';
    conditionIconContainer.innerHTML = '';
    tempMin.innerHTML = '';
    tempMax.innerHTML = '';

    weeklyInfoIndex += 1;
  });
}
//Checks the current temperature scale after the scale button clicked
function checkCurrentScale() {
  const status = document
    .querySelector('.top-left>.temp-container>.temp')
    .textContent.slice(-1);
  if (status === 'C') {
    convertToFahrenheit();
  } else {
    const userInput = document.querySelector('#city').value;
    clearPreviousContents();
    fetchData(userInput);
  }
}
//Converts from °C to °F
function convertToFahrenheit() {
  const topLeftTemp = document.querySelector('.top-left>.temp-container>.temp');
  const topLeftTempValue = topLeftTemp.textContent;
  const topLeftTempInNumber = Number(
    topLeftTempValue.substring(0, topLeftTempValue.length - 3),
  );
  topLeftTemp.textContent = `${((topLeftTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

  const bottomDivContainers = document.querySelectorAll(
    '.today-info>.bottom>div',
  );
  let todayInfoIndex = 1;
  bottomDivContainers.forEach(() => {
    const bottomTemp = document.querySelector(
      `.today-info>.bottom>[data-index="${todayInfoIndex}"]>.temp`,
    );
    const bottomTempValue = bottomTemp.textContent;
    const bottomTempInNumber = Number(
      bottomTempValue.substring(0, bottomTempValue.length - 3),
    );
    bottomTemp.textContent = `${((bottomTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    todayInfoIndex += 1;
  });

  const weeklyInfoDivContainers = document.querySelectorAll('.weekly-info>div');
  let weeklyInfoIndex = 1;
  weeklyInfoDivContainers.forEach(() => {
    const minTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .min`,
    );
    const maxTempCont = document.querySelector(
      `.weekly-info>[data-index="${weeklyInfoIndex}"] .max`,
    );
    const minTempValue = minTempCont.textContent;
    const maxTempValue = maxTempCont.textContent;

    const minTempInNumber = Number(minTempValue);
    const maxTempInNumber = Number(
      maxTempValue.substring(1, maxTempValue.length - 3),
    );

    minTempCont.textContent = `${((minTempInNumber * 9) / 5 + 32).toFixed(2)}`;
    maxTempCont.textContent = `/${((maxTempInNumber * 9) / 5 + 32).toFixed(2)} °F`;

    weeklyInfoIndex += 1;
  });
}

export {
  importDataToDom,
  loadHeaderImage,
  checkCurrentScale,
  convertToFahrenheit,
  clearPreviousContents,
};
