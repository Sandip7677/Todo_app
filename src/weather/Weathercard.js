import React, { useState, useEffect } from "react";

const Weathercard = ({ weatherdata }) => {
  const [wicon, setWicon] = useState("");

  const { temp, humidity, pressure, name, country, sunset, mood, speed } =
    weatherdata;

  let date = new Date(sunset * 1000);
  let date_string = `${date.getHours()}:${date.getMinutes()}`;

  //   const getcurtime=()=>{
  //     let curtime={
  //         setInterval(() => {
  //             new Date().toLocaleString();
  //         }, 1000);
  //     }
  //     return curtime;
  //   }

  useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clear":
          setWicon("wi-day-sunny");
          break;

        case "Sunny":
          setWicon("wi-day-sunny");
          break;

        case "Haze":
          setWicon("wi-day-haze");
          break;

        case "Rainy":
          setWicon("wi-day-rain");
          break;

        case "Clouds":
          setWicon("wi-day-cloudy");
          break;

        default:
          setWicon("wi-day-sunny");
          break;
      }
    }
  }, [mood]);

  return (
    <>
      <div className="card container">
        <div className="row r1">
          <i className={`wi ${wicon}`}></i>
        </div>
        <div className="row r2">
          <div className="col-8 bg-dark">
            <div className="row">
              <div className="col-5 temp">
                <span>{temp}</span>
              </div>
              <div className="col-7 loc">
                <span>{mood}</span>
                <p>
                  {name},{country}
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 bg-cus">
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>
        <div className="row r3">
          <div className="col">
            <div className="row r4">
              <div className="col c1">
                <i class="wi wi-horizon"></i>
              </div>
              <div className="col c2">
                <span>{date_string} PM sunset</span>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="row r4">
              <div className="col c1">
                <i class="wi wi-barometer"></i>
              </div>
              <div className="col c2">
                <span>{pressure} Pressure</span>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="row r4">
              <div className="col c1">
                <i class="wi wi-humidity"></i>
              </div>
              <div className="col c2">
                <span>{humidity} Humidity</span>
              </div>
            </div>
          </div>
          <div className="col ">
            <div className="row r4">
              <div className="col c1">
                <i class="wi wi-strong-wind"></i>
              </div>
              <div className="col c2">
                <span>{speed}KM/H speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
