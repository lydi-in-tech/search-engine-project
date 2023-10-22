import React, { useState, useEffect } from "react"
import axios from "axios"
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  function displayForecast(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }
  
  function load() {
      let apiKey2 = "96771e971243152d6b8948878c26adde";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;
        axios.get(apiUrl1).then(displayForecast);

  }
   

  if (loaded) {
    return (
      <div className="weather-forecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[5]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={forecast[6]} />
          </div>
        </div>
      </div>
    )
  } else {
    load()
    return null;
  }
}