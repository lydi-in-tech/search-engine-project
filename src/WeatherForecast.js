import React from "react"
import axios from "axios"
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon"
export default function WeatherForecast(props) {

    function displayForecast(response) {
        console.log(response.data)

    }
   
  let apiKey2 = "4c9b53e4f8f5eb00df5915bdca340605";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey2}&units=metric`;
  axios.get(apiUrl1).then(displayForecast);


    return (
        
            <div className="weather-forecast">
  <div className="row">
    <div className="col">
      <div className="weather-forecast-date">Thur</div>
      <div className="weather-icon">
                        < WeatherIcon code="01d" size={ 60} />
      </div>
      
      <div className="weather-forecast-temperatures">
        <span className="weather-forecast-temperature-max">
          18° 
        </span>
        /
        <span className="weather-forecast-temperatue-min">12° </span>
      </div>
                </div>
                
                </div>
        
            </div>
            
            
            
            
    )
}