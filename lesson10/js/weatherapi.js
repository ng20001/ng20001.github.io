const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;

    /*
    document.getElementById('day1'+[]).textContent = jsObject.main.temp_max;
    document.getElementById('day2').textContent = jsObject.main.humidity;
    document.getElementById('day3').textContent = jsObject.wind.speed;
    document.getElementById('day4').textContent = jsObject.wind.speed;
    document.getElementById('day5').textContent = jsObject.wind.speed;
    */


    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    //const desc = jsObject.weather[0].description;  // note how we reference the weather array
    //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);
  });