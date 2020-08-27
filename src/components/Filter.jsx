import React from 'react';
import Card from './Card';
import {
  getCountryByCode,
  getCurrentTime,
  kelvin2celcius,
} from '../helpers';

function Filter({ items }) {
  return (
    items.map(i =>
      <Card
        key={ i.id }
        city={ i.name }
        country={ getCountryByCode(i.sys.country) }
        temp={ kelvin2celcius(i.main.temp) }
        max={ kelvin2celcius(i.main.temp_max) }
        min={ kelvin2celcius(i.main.temp_min) }
        sky={ i.weather[0].main }
        timestamp={ getCurrentTime() }
        feelsLike={ kelvin2celcius(i.main.feels_like) }
      />
    )
  )
}

export default Filter;
