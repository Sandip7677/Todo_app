import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercard from "./Weathercard";

const Weather = () => {
  const [searchItem, setSearchItem] = useState("daltonganj");
  const [weatherdata, setWeatherdata] = useState({});

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchItem}&units=metric&appid=${process.env.REACT_APP_KEY}`
      );
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { name } = data;
      const { country, sunset } = data.sys;
      const { main: mood } = data.weather[0];
      const { speed } = data.wind;

      const weatherinfo = {
        temp,
        humidity,
        pressure,
        name,
        country,
        sunset,
        mood,
        speed,
      };

      setWeatherdata(weatherinfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-main d-flex flex-column align-items-center justify-content-center ">
        <div className="nav d-flex">
          <input
            type="text"
            placeholder="search.."
            className="search"
            value={searchItem}
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
          />
          <button className="button" onClick={getData}>
            search
          </button>
        </div>
        <Weathercard weatherdata={weatherdata} />
      </div>
    </>
  );
};

export default Weather;
// f22a8cd6c8eeec695213e4649b775d39
// https://api.openweathermap.org/data/2.5/weather?q=daltonganj&appid=f22a8cd6c8eeec695213e4649b775d39
