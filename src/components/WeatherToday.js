import React from "react";
import mostlycloudy from './../img/weather-icons/mostlycloudy.svg'
import clear from './../img/weather-icons/clear.svg'


function WeatherToday({data}){
  {
    data.list.map((e) => {
      
    })
  }

  const getData=data.list.slice(1);

  return (

    <section className="dayweather">


      {getData.map((e) => {
        let hours= e.dt_txt.split(" ")
        return (
      
          
          <article className="wheatherItem">
             <p>{hours[1].slice(0,5)}</p>
             <img className="imgItem" src={clear}></img>
             <p>{parseInt(e.main.temp )}&deg;C</p>
         </article>
        )
      })}

    </section>
  )
}
export default WeatherToday