const weather = {};

weather.temperature = {
  unit: "celsius",
};

const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

function evenEnter() {
  let getName = document.getElementById("getName");

  getName.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("myBtn").click();
    }
  });
}
evenEnter();

async function getData() {
  let getName = document.getElementById("getName").value;

  let respond = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      getName +
      "&appid=71195b0ceccd12bcc5c45a0d00307d43"
  )
    // respond = await respond.json()
    // console.log(respond)

    .then(async function (response) {
      let data = await response.json();
      console.log(data);
      return data;
    })

    .then(function (data) {
      weather.temperature.value = Math.floor(data.main.temp - 273);
      weather.description = data.weather[0].description;
      console.log(weather.description);
      weather.iconId = data.weather[0].icon;
      console.log(weather.iconId);
      weather.city = data.name;
      console.log(weather.city);
      weather.country = data.sys.country;
      console.log(weather.country);
    })
    .then(function () {
      displayWeather();
    });
}
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
