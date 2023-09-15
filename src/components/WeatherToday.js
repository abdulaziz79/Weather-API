import React from "react";
import mostlycloudy from './../img/weather-icons/mostlycloudy.svg'
import clear from './../img/weather-icons/clear.svg'


function WeatherToday({fake}){
  {
    fake.list.map((e) => {
      console.log(e.dt_txt);
    })
  }

  const getData=fake.list.slice(5,11);

  return (

    <section className="dayweather">


      {getData.map((e) => {
        let hours= e.dt_txt.split(" ")
        return (
          // <article className="footer">
          //   <p className="weatherItem">{hours[1].slice(0,5)}</p>
          //   <img className="imgItem" src={clear} alt="weatherImag"  />
          //   <span className="temp">{parseInt(e.main.temp -273.15)}&deg;C </span>
          // </article>
          
          <article className="wheatherItem">
             <p>{hours[1].slice(0,5)}</p>
             <img className="imgItem" src={clear}></img>
             <p>{parseInt(e.main.temp -273.15)}&deg;C</p>
         </article>
        )
      })}

    </section>
  )
}
export default WeatherToday