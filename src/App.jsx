import { ApiKey, currentUrl } from "./Api";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import { useState } from "react";


function App() {
  const handleOnSearchChange = (searchData) => {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${currentUrl}/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`
    );
     const forecastFetch = fetch(
       `${currentUrl}/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`
     );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeather({city:searchData.label, ...weatherResponse});
        setForecast({city:searchData.label, ...forecastResponse});
    })
  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <Weather />
    </div>
  );
}

export default App;
