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

import WeatherToday from "./components/WeatherToday";
import FakeWeather from "./FakeWeather.json"

let fake = FakeWeather
console.log(fake)
// console.log(FakeWeather)
function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <CurrentWeather  fake={fake}/>
        <WeatherToday fake = {fake}/>
      </main>
    </div>
  );
}

export default App;