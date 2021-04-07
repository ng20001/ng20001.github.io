
/*-------------WeatherAPI-------------*/
const HKapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=22.319300&lon=114.169400&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";


/*------------fetch----------------*/
fetch(HKapiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject.current.weather.main);
    document.getElementById('condition').textContent = jsObject.current.weather.main;
    document.getElementById('currtemp').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;

  });


