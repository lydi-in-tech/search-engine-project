import React from "react"
import "./WeatherForecast.css"
export default function WeatherForecast() {
    return (
        
            <div class="weather-forecast" id="weather-forecast">
  <div class="row">
    <div class="col">
      <div class="weather-forecast-date">Thur</div>
      <div class="weather-icon">
        <img src="http://openweathermap.org/img/wn/50d@2x.png"  alt="weather" width="200" height="100"/> 
      </div>
      
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">
          18° 
        </span>
        /
        <span class="weather-forecast-temperatue-min">12° </span>
      </div>
    </div>
                </div>
            </div>
            
    )
}