import React from 'react';
import { string } from 'prop-types';
import '../css/Loader.css';

function Loader({ city, country }) {
  return (
    <section className="wrapper">
      {
        city && country
        ? <h3>Loading weather for { city }, { country }</h3>
        : null
      }
      <div className="Loader">
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

Loader.propTypes = {
  city: string,
  country: string,
}

export default Loader;
