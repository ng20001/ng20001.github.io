/*-------------WeatherAPI-------------*/
const HKapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=22.319300&lon=114.169400&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";

/*-------------Date-------------*/
const today = new Date();
day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);

/*------------fetch----------------*/
fetch(HKapiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject.current.weather[0]);
    document.getElementById('condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('currtemp').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;

    document.getElementById('first-day-temp').textContent = jsObject.daily[0].temp.day;
    document.getElementById('second-day-temp').textContent = jsObject.daily[1].temp.day;
    document.getElementById('third-day-temp').textContent = jsObject.daily[2].temp.day;

    /*-------------Alert(HK Region: Unavaliable from the API)-------------*/
    /*

    document.getElementById('weather-alert').textContent = jsObject.alerts.event;

    const element = document.getElementById("special-note");
    if (jsObject.alerts.event == undefined) {
        element.classList.add("hideme");
    } else {
        element.classList.add("showme");
    }
    */

  });
  
  /*
  function closeAlert() {
      document.getElementById("special-note").classList.add("hideme");
  }
  */

  document.getElementById("first-day").innerHTML = `${day[(today.getDay() + 1) % 7]}`
  document.getElementById("second-day").innerHTML = `${day[(today.getDay() + 2) % 7]}`
  document.getElementById("third-day").innerHTML = `${day[(today.getDay() + 3) % 7]}`