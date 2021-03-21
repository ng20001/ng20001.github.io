
/*-------------WeatherAPI-------------*/
const prestonApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";
const sodaSpringsApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5678757&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";
const fishHavensApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=a3a248601a9f69327684ea06f341d4bb&units=metric";

var apiURL = "";

if (document.getElementById('page-tag').textContent == "pt"){
  apiURL = prestonApiURL;
} 
else if (document.getElementById('page-tag').textContent == "sp"){
  apiURL = sodaSpringsApiURL;
}
else if (document.getElementById('page-tag').textContent == "fh"){
  apiURL = fishHavensApiURL;
}

/*--------------Windchill------------*/
function calculation(t, s) {
    console.log(t);
    console.log(s);
    if (s > 3 && t <= 50) {
        var wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        wc = Math.round(wc);
    } else {
        return "N/A";
    }
    return wc;
}

function display(wc) {
    console.log(wc);
    if (wc == "N/A") {
        document.getElementById("windChill").innerHTML = wc;
    } else {
        wc = String(wc) + " C&deg";
        document.getElementById("windChill").innerHTML = wc;
    }
}

/*------------fetch----------------*/

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    display(calculation(jsObject.main.temp_max, jsObject.wind.speed));

  });


