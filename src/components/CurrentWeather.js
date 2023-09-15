import React from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg"

function CurrentWeather({data}) {
let tempMin = data.list[0].main.temp_min,
  tempMax = data.list[0].main.temp_max,
  humidity = data.list[0].main.humidity,
  pressure = data.list[0].main.pressure;

return (

    <section className="center">
      <img className="first-img" src={mostlycloudy} width={300} height={200}></img>
      <h4>overcast clouds</h4>
      <h3>Temperature <span style={{ opacity: '0.7' }}>  {tempMin}  to {tempMax}  &deg;C</span></h3>
      <p className="humidity"><span style={{ fontWeight: "bold" }}>  Humidity  </span>  {humidity}% <span style={{ fontWeight: "bold" }}> Pressure </span> {pressure}</p>


    </section>
  )
}








export default CurrentWeather; 