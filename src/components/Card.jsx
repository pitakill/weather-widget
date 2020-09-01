import React from 'react';
import { string } from 'prop-types';
import '../css/Card.css';
import CurrentWeather from './CurrentWeather';
import {
  getCountryByCode,
  getCurrentTime,
  kelvin2celcius,
} from '../helpers';

function Card(props) {
  const {
    main: {
      feels_like,
      temp,
      temp_max,
      temp_min,
    },
    name: city,
    sys: {
      country,
    },
    weather,
  } = props;

  return (
    <section className="Card">
      <h4>{ city }, { getCountryByCode(country) } Weather</h4>
      <h5>{ getCurrentTime() }</h5>
      <CurrentWeather 
        max={ kelvin2celcius(temp_max) }
        min={ kelvin2celcius(temp_min) }
        sky={ weather[0].main }
        temp={ kelvin2celcius(temp) }
      />
      <h6>feels like { kelvin2celcius(feels_like) }°</h6>
    </section>
  )
}

Card.propTypes = {
  name: string.isRequired,
}

export default Card;
