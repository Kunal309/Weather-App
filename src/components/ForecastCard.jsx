// src/components/ForecastCard.jsx
import React from 'react';

const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="forecast-card">
      <h3>{dayOfWeek}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
        alt={forecast.weather[0].description}
      />
      <p>High: {Math.round(forecast.main.temp_max)}°</p>
      <p>Low: {Math.round(forecast.main.temp_min)}°</p>
    </div>
  );
};

export default ForecastCard;
