import SearchBox from "./SearchBox";
import InfoBox from "./InFoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo ] = useState({
    city: "Delhi",
    feels_like: 38.2,
    humidity: 55,
    temp: 33.17,
    tempMax: 33.17,
    tempMin: 33.17,
    weather: "overcast clouds",
  });


  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  } 
  return (
    <div style={{textAlign:"center"}}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
