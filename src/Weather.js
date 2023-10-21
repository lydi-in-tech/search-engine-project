import React, { useState } from "react"
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios"
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
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, 
    city: response.data.name
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
        <div class="container">
  <div class="search-bar">
    <form  id="search-form" onSubmit={handleSubmit}> 
      <div class="row">
        <div class="search-bar">
          <div class="col-9 search-form">
            <input type="search" placeholder="Search for a city" 
            autofocus="on"
            autocomplete="off"
            class="form-control search-input"
                                        id="city-input"
                                        onChange={handleCityChange}
            />
          </div>
          <div class="col-3 p-0">
            <input type="submit" class="btn w-20" value="Search"/>
          </div>
        </div>
      </div>
    </form>
  </div>

 <div>
                 

          <div className="icon" ><img src={weatherData.iconUrl} width="200" height="200" alt="clear" /> 
            
            
              <WeatherTemperature celsius={weatherData.temperature} />
              
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
            </div>
    )
    } else {
        search()
        
        return "Loading.."
    }




    
}