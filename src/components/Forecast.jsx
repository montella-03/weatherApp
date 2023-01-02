import React from "react";
import "./style.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = weekDays
    .splice(dayInWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInWeek));
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => {
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="dailyItem">
                  <img
                    alt="weatherImage"
                    className="weatherIcon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="days">{forecastDays[index]}</label>
                  <label className="dayDescription">
                    {item.weather[0].description}
                  </label>
                  <label className="daysRangeTemp">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="dailyDetailsGrid">
                <div className="gridItem">
                  <label>Pressure</label>
                  <label>{item.main.pressure}hpa</label>
                </div>
                <div className="gridItem">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="gridItem">
                  <label>Clouds</label>
                  <label>{item.clouds.all}</label>
                </div>
                <div className="gridItem">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="gridItem">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="gridItem">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>;
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
