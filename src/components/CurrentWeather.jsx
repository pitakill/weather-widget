import React from 'react';
import { number, string } from 'prop-types';
import { getIcon } from '../helpers';
import '../css/CurrentWeather.css';

const path = 'assets/icons/weather/animated';

function CurrentWeather({ temp, sky, max, min }) {
  return (
    <div className="CurrentWeather">
      <section>
        <span className="current">{ temp }°</span>
        <div>{ sky }</div>
      </section>
      <section>
        <img src={ `${process.env.PUBLIC_URL}/${path}/${getIcon(sky)}.svg` } alt="weather icon" />
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
