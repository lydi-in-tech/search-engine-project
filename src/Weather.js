import React, { useState } from "react"
import axios from "axios"
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css"

export default function Weather(props) {
    const [city, setCity]=useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState({ ready: false })
    
    function handleResponse(response) {
        setWeatherData({
      ready:true,
      temperature: response.data.main.temp,
    description:response.data.weather[0].description,
    humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: response.data.weather[0].icon,
            city: response.data.name,
    coordinates: response.data.coord
   })
    }

    function search() {
      const apiKey = "bf54175800a55e59e6c4d6461deeef12"
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
    event.preventDefault()
    search()
    }
    
     function handleCityChange(event) {
       setCity(event.target.value)
     }
   

    if (weatherData.ready) {
    return (
        <div className="Weather">
        <div className="container">
          <div className="search-bar">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="search-bar">
                  <div className="col-9 search-form">
                    <input type="search" placeholder="Search for a city"
                      autoFocus="on"
                      autoComplete="off"
                      className="form-control search-input"
                      id="city-input"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3 p-0">
                    <input type="submit" className="btn w-20" value="Search" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <div>
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
          
          <div className="icon" >
            <div className="showIcon">
              <WeatherIcon code={weatherData.iconUrl} size={110} />
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <div className="d-flex">
                  <div>
                    <WeatherTemperature celsius={weatherData.temperature} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="city">{weatherData.city}</h1>
          
          <div className="time">
            <FormattedDate date={weatherData.date} />
          </div>
          
          <div className="info">
            <div className="description text-capitalize">{weatherData.description}</div>
            <div className="humidity" >Humidity: {weatherData.humidity}%</div>
            <div className="windSpeed" >Wind: {Math.round(weatherData.windspeed)}km/h</div> 
          </div>
        
        </div>
      </div>
      )
    } else {
      search()
      
      return "Loading.."
    }
}