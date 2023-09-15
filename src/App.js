import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import cloudy from './img/weather-icons/cloudy.svg';
import clear from './img/weather-icons/clear.svg';
import Nav from "./components/Nav";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import { useState, useEffect } from "react";

import WeatherToday from "./components/WeatherToday";
import FakeWeather from "./FakeWeather.json"

let key="02eb9745653a424c9b2485f7912d01b8"



function App() {
  const [city, setCity]=useState("Tripoli")
  const [data, setData]=useState({})
  const apiKey="02eb9745653a424c9b2485f7912d01b8"
  const apiUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`

  const myFunc= async()=>{
    await fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the response as JSON
    })
    .then(parsedData => setData(parsedData)) // Set the parsed JSON data into the state
    .catch(error => console.error("error fetching weather data", error));


  }

  useEffect(()=>{
   myFunc()

    
  },[city])

  return (
    <div className="app">
      <Nav setCity={setCity} />
      <main>
        <CurrentWeather  data={data}/>
        { <WeatherToday data = {data}/> }
      </main>
    </div>
  );
}

export default App;