import React from "react";

export default function WeatherTemperature(props) {
   



  
        return (
    <div className="WeatherTemperature">
      <span className="temp">{Math.round(props.celsius)}</span>
              <span className="tempUnit">
                    °C{""}
                    
                </span>
            </div>
            
        )
  
}