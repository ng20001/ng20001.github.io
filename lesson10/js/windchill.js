const TEMP = parseFloat(document.getElementById("highTemp").textContent);
const SPEED = parseFloat(document.getElementById("windSpeed").textContent);

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
    if (wc == "N/A") {
        document.getElementById("windChill").innerHTML = wc;
    } else {
        wc = String(wc) + " C&deg";
        document.getElementById("windChill").innerHTML = wc;
    }

}

display(calculation(TEMP, SPEED));