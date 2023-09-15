import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import { CurrentWeather, WeatherItem } from "./components/WeatherItem"
import Loading from "./components/Loading";

function App() {

 

    const [isLoading,setIsLoading]=useState(false);

    const [inputValue, setInputValue] = useState("Moscow");

    const [showData,setShowData]=useState(null);

  

    const [isFound,setIsFound]=useState(true);

  


  const API_KEY="02eb9745653a424c9b2485f7912d01b8";

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=8&units=metric&appid=${API_KEY}`;
  
  const handleSearch = async() => {
  
    setIsLoading(true)

   
    await fetch(url)

    .then((response) => {

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((showData) => {
      
        setShowData(showData);

        setIsLoading(false)

      
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      
        setIsLoading(false)

        setIsFound(false)

      });
  };
  useEffect(() => {
    if (setIsLoading) {
      handleSearch();
    }
  }, [])


  const handleInputValueChange = (value) => {
    setInputValue(value);
  };


  return (
    <div className="app">
      <Search onClick={handleSearch} onInputChange={handleInputValueChange} />

      {showData && !isLoading && isFound?  (
      <div className="main">
    
   
      <CurrentWeather showData={showData}/>

      <WeatherItem showData={showData}/> 
      
      </div> 
      ) : !isFound && !isLoading?(

        <div className="main">

      <CurrentWeather showData={null}/>
      </div>
      
      ) :
      <div className="main">

      <Loading/>
</div>
     }
      </div>


  )
}

export default App;