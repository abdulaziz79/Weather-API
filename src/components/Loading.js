import React from "react";
import cloudy from "../img/weather-icons/cloudy.svg"
// import "./../App.css";
import loading from "../img/weather-icons/Loading.png"
function Loading(){
return(
    <section className="nowWeather">

    <img className="nowImg" src={loading} alt="weatherImag" />

    <h1> Loading ...</h1>

  </section>
)

}
export default Loading;