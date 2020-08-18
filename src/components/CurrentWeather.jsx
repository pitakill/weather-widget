import React from 'react';
import icon from '../assets/icons/weather/animated/cloudy-day-1.svg';
import '../css/CurrentWeather.css';

function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <section>
        <span className="current">18°</span>
        <div>Cloudy</div>
      </section>
      <section>
        <img src={icon} alt="weather icon" />
        <span className="forecast">24°/14°</span>
      </section>
    </div>
  )
}

export default CurrentWeather;
