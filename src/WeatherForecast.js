import React, { useState } from "react"
import axios from "axios"
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false)
  let [forecast, setForecast] = useState(null)
  
    function displayForecast(response) {
      setForecast(response.data.daily)
      setLoaded(true)
    }
   

    if (loaded) {
        
    return (
        
            <div className="weather-forecast">
  <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
      
                </div>
                
                </div>
        
            </div>
    )
        
    } else {
        let apiKey2 = "667d9f573c8af4c33457be5d561a9148";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;
        axios.get(apiUrl1).then(displayForecast);
        
      return null;
        
    }


}