import React from "react";
import "./Style.css";

const Weather = () => {
  return (
    <div className="weather ">
      <div className="temperature">
        <div>
          <p className="cityName">Nairobi</p>
          <p className="weatherCast">Sunny</p>
        </div>

        <img
          className="weatherIcon w-8 mt-2"
          alt="weather image"
          src="icons/sunny.png"
        />
      </div>
      <div className="temperatuteDetails font-Roboto text-gray-200 flex items-center justify-between">
        <p className="temperatureValue">15°C</p>
        <div className="details">
          <div className="temperatureRow">
            <span className="tempLabel text-gray-100">Details</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Feels hot</span>
            <span className="tempValue">22°C</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Wind</span>
            <span className="tempValue">2m/s</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">Humidity</span>
            <span className="tempValue">22%</span>
          </div>
          <div className="temperatureRow">
            <span className="tempLabel">pressure</span>
            <span className="tempValue">15hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
