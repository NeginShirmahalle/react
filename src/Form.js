import React, { useState } from "react";
import axios from "axios";
import "./App";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "86c3d305941151df2073007eebec816c";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then((response) => setWeatherData(response.data));
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a City..."
          onChange={updateCity}
          value={city}
        />
        <input type="submit" value="Search" />
      </form>

      {weatherData && (
        <ul>
          <li>Temperature: {Math.round(weatherData.main.temp)} °C</li>
          <li> Description: {weatherData.weather[0].description}</li>
          <li> Humidity: {weatherData.main.humidity}</li>
          <li> Wind: {Math.round(weatherData.wind.speed)}</li>
          <li>
            {" "}
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="#61677A"
              size="50"
              animate="true"
            />
          </li>
        </ul>
      )}
     <p>Coded by<a href="https://github.com/NeginShirmahalle/react"> Negin</a></p> 
    </div>
  );
}
