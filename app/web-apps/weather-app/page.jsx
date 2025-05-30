'use client'
import React, { useState } from "react";
import { getWeather } from './js/api.js';

export default function WeatherApp(){
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const searchCity = async () => {
    try {
      const data = await getWeather(city);
      setWeather(data);
      setError(null);
    } catch(err) {
      setWeather(null);
      setError('City not found');
    }
    console.log("API key:", process.env.OPENWEATHER_API);

  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-[#f6f6f6] text-center">Weather App</h1>
      <div className="flex mb-4 mt-4">
        <input 
        type="text"
      value={city}
      placeholder="Enter City"
      onChange={(e) => setCity(e.target.value)}
      className="p-2" />

        <button className="p-2 bg-green-300" onClick={searchCity}>Search City</button>
      </div>

    

      

      {error && <p className="text-red-600">{error}</p>}

      {weather && (
        <div className="bg-[#444444] p-5 rounded">
          <h2 className="w-full text-center text-[#e9e9e9] text-xl mb-2">{weather.name}:</h2>
          <p className="text-[#e9e9e9] underline mb-1">{weather.weather[0].description}</p>
          <p className="text-[#e9e9e9] mb-1">Temperature: {Math.round((weather.main.temp*(9/5))+32)} °F</p>
          <p className="text-[#e9e9e9] mb-1"> Humidity: {weather.main.humidity}%</p>

        </div>)}


    </div>
  );
}