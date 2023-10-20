import React from "react"
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
        <div class="container">
  <div class="search-bar">
    <form  id="search-form"> 
      <div class="row">
        <div class="search-bar">
          <div class="col-9 search-form">
            <input type="search" placeholder="Search for a city" 
            autofocus="on"
            autocomplete="off"
            class="form-control search-input"
            id="city-input"
            />
          </div>
          <div class="col-3 p-0">
            <input type="submit" class="btn w-20" value="Search"/>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="icon" ><img src="http://openweathermap.org/img/wn/50d@2x.png" width="200" height="200" alt="clear" id="icon"/> 
    <div class="temp" id="temp">21</div>
    <span id="celcius" class="celcius">
      <strong id="temperature"></strong>
      <a href="#" id="celsius-link">°C</a>|<a href="#" id="fahrenheit-link">°F</a>
    </span>
  </div> 

<h1>
  <div id="city" class="city">New York</div>
</h1>


  <div class="time" id="time">15:00 Friday</div>



                
                <div className="info">
                <div className="description text-capitalize">rainy</div>
                <div className="humidity" >Humidity: %</div>
                <div className="windSpeed" >Wind: km/h</div> 
            </div>

            </div>
            </div>



    )
}