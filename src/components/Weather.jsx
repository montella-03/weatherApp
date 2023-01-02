import React from "react";
import "./Style.css";

const Weather = ({ data }) => {
  return (
    <div className="weather ">
      <div className="temperature">
        <div>
          <p className="cityName">{data.city}</p>
          <p className="weatherCast">{data.weather[0].description}</p>
        </div>

        <img
          className="weatherIcon w-8 mt-2"
          alt="weather image"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="temperatuteDetails font-Roboto text-gray-200 flex items-center justify-between">
        <p className="temperatureValue">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="temperatureRow">
            <span className="tempLabel text-gray-100">Details</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Feels like</span>
            <span className="tempValue">{Math.round(data.main.feels)}°C </span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Wind</span>
            <span className="tempValue">{data.wind.speed }m/s</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Humidity</span>
            <span className="tempValue">{data.main.humidity}%</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">pressure</span>
            <span className="tempValue">{data.main.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
