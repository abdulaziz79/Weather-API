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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdulaziz and Issa"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       <Nav/>

       <main>
       <CurrentWeather/>
       
       </main>
       
      
        
      </div>
    );
  }
}

export default App;
