import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(reponse.data.main.temp);
    setReady(true);
  }
  if (ready) {
    let weatherData = {
      city: "New York",
      temperature: 19,
      date: "Sunday 22:00",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: 80,
      wind: 10,
    };

    return (
      <div className="Weather">
        <div className="overview">
          <header className="forecast">Weather Forecast for 5 days</header>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <br />
        <form className="mb-3">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
              <input
                type="submit"
                value="Current"
                className="btn btn-success"
              />
            </div>
            <div>
              <a href="https://github.com/AnnaKasian/Created-Weather5days-week4">
                Open-sourse code
              </a>
              by Anna Kasian
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "c67e1dea0ba4cf764464b48e6670cb92";
    let city = "New York";
    let apiUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
