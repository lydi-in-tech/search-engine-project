import React from "react"
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"
export default function WeatherForecast() {
    return (
        
            <div class="weather-forecast">
  <div class="row">
    <div class="col">
      <div class="weather-forecast-date">Thur</div>
      <div class="weather-icon">
                        < WeatherIcon code="01d" size={ 60} />
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