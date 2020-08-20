import React from 'react';
import { number, string } from 'prop-types';
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

CurrentWeather.propTypes = {
  temp: number.isRequired,
  sky: string.isRequired,
  max: number.isRequired,
  min: number.isRequired,
}

export default CurrentWeather;
