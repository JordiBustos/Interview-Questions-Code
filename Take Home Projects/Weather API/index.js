const API_URL = "https://fcc-weather-api.glitch.me/api/current?";

var latitude, longitude;
var tempUnit = true; // true: Celsius, false: Fahrenheit
var currentTempInCelsius;

window.onload = function() {
    if (!navigator.geolocation) {
        document.getElementById('ubication').innerText = "Your browser doesn't support geolocation :(";
    } else {
        navigator.geolocation.getCurrentPosition(onSucess, onError);
    }
    // handle sucess
    function onSucess(position) {
        latitude = `lat= ${position.coords.latitude}`;
        longitude = `lon=${position.coords.longitude}`;
        getWeather(latitude, longitude);
    }
    // handle error case
    function onError() {
        document.getElementById('ubication').innerText = 'Failed to get your location!';
    }
}

function getWeather(latitude, longitude) {
    const API_GET = `${API_URL}${latitude}&${longitude}`

    const data = fetch(API_GET)
    .then(response => response.json())
    .then(display)
}

function display(data) {
    currentTempInCelsius = data.main.temp;
    
    document.getElementById('ubication').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('tmp').innerText = `${currentTempInCelsius} ${tempUnit ? 'C' : 'F'}`
    document.getElementById('moreInfo').innerText = `Humidity: ${data.main.humidity}`
    changeImg(currentTempInCelsius)
}

function computeFtoC(f) {
    /*Receives tmp in fahrenheit and returns tmp in celsius */
    return (f - 32) / 1.8
}

function computeCtoF(c) {
    /*Receives tmp in celsius and returns tmp in fahrenheit */
    return c * 1.8 + 32
}

function changeTmp(){
    let currTemp = Number(document.getElementById('tmp').innerText.slice(0, 5));
    let newTemp = tempUnit ? computeCtoF(currTemp) : computeFtoC(currTemp);
    if (Object.is(newTemp, NaN)) {
        document.getElementById('tmp').innerText = 'Nope! Something went wrong';
    } else {
        tempUnit = !tempUnit
        document.getElementById('tmp').innerText = `${newTemp} ${tempUnit ? 'C' : 'F'}`;
    }
}

function changeImg(tmp) {
    let img = document.getElementById('weather');
    let arrOfImages = ['img/desert.jpg', 'img/summer.jpg', 'img/cold.jpg', 'img/snow.jpg']
    if (tmp >= 35) {
        img.src = arrOfImages[0]
    } else if (tmp >= 15 && tmp < 35) {
        img.src = arrOfImages[1]
    } else if (tmp >= 0 && tmp < 15) {
        img.src = arrOfImages[2]
    } else {
        img.src = arrOfImages[3]
    }
}