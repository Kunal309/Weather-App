// src/components/WeatherInfo.jsx
import React from 'react';

const WeatherInfo = ({ data }) => {
  return (
    <div className="weather-info">
      <h2>{data.name}</h2>
      <p>{Math.round(data.main.temp)}°</p>
      <p>{data.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
};

export default WeatherInfo;
