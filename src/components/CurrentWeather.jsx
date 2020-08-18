import React from 'react';
import icon from '../assets/icons/weather/animated/day.svg';
import '../css/CurrentWeather.css';

function CurrentWeather({ temp, sky, max, min }) {
  return (
    <div className="CurrentWeather">
      <section>
        <span className="current">{ temp }°</span>
        <div>{ sky }</div>
      </section>
      <section>
        <img src={ icon } alt="weather icon" />
        <span className="forecast">{ max }°/{ min }°</span>
      </section>
    </div>
  )
}

export default CurrentWeather;
