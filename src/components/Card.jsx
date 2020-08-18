import React from 'react';
import '../css/Card.css';
import CurrentWeather from './CurrentWeather';

function Card() {
  return (
    <section className="Card">
      <h4>Mexico City, Mexico City, Mexico Weather</h4>
      <h5>as of 10:50 am CDT</h5>
      <CurrentWeather />
      <h6>10% chance of rain trhoug 11 am</h6>
    </section>
  )
}

export default Card;
