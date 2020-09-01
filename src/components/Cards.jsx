import React from 'react';
import { array } from 'prop-types';
import Card from './Card';

function Cards({ forecasts }) {
  return (
    <>
      { forecasts.map((f, i) => <Card key={i} { ...f } />) }
    </>
  )
}

Cards.propTypes = {
  forecasts: array.isRequired,
}

export default Cards;
