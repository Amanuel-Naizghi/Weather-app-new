import { importDataToDom } from './DOM.js';

async function fetchData(city) {
  try {
    const loadingDialog = document.querySelector('#loading-dialog');
    loadingDialog.showModal();
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}?unitGroup=metric&key=VFS2WWLFWATZWDP439374ZTZY&contentType=json`,
      { mode: 'cors' },
    );
    const data = await response.json();
    importDataToDom(data);
    loadingDialog.close();
  } catch (err) {
    const errorDialog = document.querySelector('#error-dialog');
    const errorText = document.querySelector('#error-dialog>p');
    errorText.textContent = `${err}`;
    errorDialog.showModal();
    setTimeout(() => {
      errorDialog.close();
    }, 5000);
    fetchData('Asmara');
  }
}

function getCurrentDayInfo(dateInfo) {
  const dayData = new Date(dateInfo);
  const day = dayData.getDate();
  const month = dayData.getMonth() + 1;
  const year = dayData.getFullYear();

  const getActualDayMonthYear = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getActualDayMonth = () => {
    const date = new Date(year, month - 1, day);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleString('en-US', options);
  };

  const getDayName = () => {
    const date = new Date(dateInfo);
    return date.toLocaleString('en-US', { weekday: 'long' });
  };

  return { getDayName, getActualDayMonthYear, getActualDayMonth };
}

function timeFormatter(time) {
  const myTime = time.slice(0, 5);
  let myHour = myTime.slice(0, 2);
  const myMinute = myTime.slice(3, 5);
  let timeIndicator;

  if (myHour > 12) {
    myHour -= 12;
    timeIndicator = 'Pm';
  } else if (myHour === '12') {
    timeIndicator = 'Pm';
  } else {
    timeIndicator = 'Am';
  }

  const myNewTime = `${myHour}:${myMinute}`;
  return { myNewTime, timeIndicator };
}

export { fetchData, getCurrentDayInfo, timeFormatter };
