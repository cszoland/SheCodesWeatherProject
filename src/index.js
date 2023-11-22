function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#display-temperature");
  displayTemp.innerHTML = temperature;
  let display = document.querySelector("#display-city");
  display.innerHTML = response.data.name;
}

function cityShow(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let apiKey = "73a00877081bd43422bdee0f3022beb5";
  let units = "imperial";
  let city = cityInput.value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiURL).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", cityShow);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
