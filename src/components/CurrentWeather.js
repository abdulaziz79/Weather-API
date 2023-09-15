import React from "react";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg"
import FakeWeather from "./../FakeWeather.json"

function CurrentWeather(){
let tempMin = FakeWeather.list[1].main.temp_min , tempMax = FakeWeather.list[1].main.temp_max , humidity = FakeWeather.list[1].main.humidity, pressure =FakeWeather.list[1].main.pressure;
    return(

        <section  className="center">
        <img className="first-img" src={mostlycloudy} width={300} height={200}></img>
          <h4>overcast clouds</h4>
          <h3>Temperature <span style={{opacity:'0.7'}}>  {tempMin}  to {tempMax}  &deg;C</span></h3>
          <p className="humidity"><span style={{fontWeight:"bold"}}>  Humidity  </span>  {humidity}% <span style={{fontWeight:"bold"}}> Pressure </span> {pressure}</p>
         

        </section>
    )
}








export default CurrentWeather; 