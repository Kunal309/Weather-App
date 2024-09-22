// src/App.jsx
import React, { useState, useEffect } from 'react';
import WeatherInfo from './components/WeatherInfo';
import SearchComponent from './components/SearchComponent';
import ForecastCard from './components/ForecastCard';
import TemperatureToggle from './components/TemperatureToggle';
import './App.css';

const App = () => {
  const [city, setCity] = useState('New York');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  // src/App.jsx
const fetchWeatherData = async (city, unit) => {
  try {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; // Get the API key

    // Fetch current weather data
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
    );

    if (!weatherResponse.ok) {
      const errorData = await weatherResponse.json();
      console.error("Weather API error: ", errorData);
      throw new Error(errorData.message || "City not found");
    }

    const weather = await weatherResponse.json();
    setWeatherData(weather);

    // Fetch 5-day forecast data
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`
    );

    if (!forecastResponse.ok) {
      const errorData = await forecastResponse.json();
      console.error("Forecast API error: ", errorData);
      throw new Error(errorData.message || "City not found");
    }

    const forecast = await forecastResponse.json();
    setForecastData(forecast);
  } catch (error) {
    console.error("Error fetching weather data: ", error.message);
    alert(error.message); // Display user-friendly error
  }
};


  useEffect(() => {
    fetchWeatherData(city, unit);
  }, [city, unit]);

  return (
    <div className="App a4-container" >
      <h1>Weather Forecast</h1>
      <SearchComponent onSearch={setCity} />
      {weatherData && (
        <>
          <WeatherInfo data={weatherData} />
          <TemperatureToggle unit={unit} setUnit={setUnit} />
        </>
      )}
      <div className="forecast-container">
        {forecastData &&
          forecastData.list
            .filter((_, index) => index % 8 === 0) // Filter to get data every 24 hours
            .map((forecast, index) => (
              <ForecastCard key={index} forecast={forecast} />
            ))}
      </div>
    </div>
  );
};

export default App;
