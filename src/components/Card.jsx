import React from 'react';
import '../css/Card.css';
import CurrentWeather from './CurrentWeather';

function Card({ city, country, timestamp, feelsLike, ...rest }) {
  return (
    <section className="Card">
      <h4>{ city }, { country } Weather</h4>
      <h5>{ timestamp }</h5>
      <CurrentWeather {...rest} />
      <h6>feels like { feelsLike }°</h6>
    </section>
  )
}

export default Card;
