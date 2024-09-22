// src/components/TemperatureToggle.jsx
import React from 'react';

const TemperatureToggle = ({ unit, setUnit }) => {
  return (
    <div className="temperature-toggle">
      <button
        className={unit === 'metric' ? 'active' : ''}
        onClick={() => setUnit('metric')}
      >
        Celsius
      </button>
      <button
        className={unit === 'imperial' ? 'active' : ''}
        onClick={() => setUnit('imperial')}
      >
        Fahrenheit
      </button>
    </div>
  );
};

export default TemperatureToggle;
