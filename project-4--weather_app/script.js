const apiKey = "56b1f30c634df5c89702e1088c82a9e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();