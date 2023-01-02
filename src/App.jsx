import { ApiKey, currentUrl } from "./Api";
import "./App.css";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${currentUrl}/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
    const forecastFetch = fetch(
      `${currentUrl}/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`);
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Weather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
