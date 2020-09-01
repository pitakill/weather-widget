import React from 'react';
import Grid from '@material-ui/core/Grid';
import { array } from 'prop-types';
import Card from './Card';

function Cards({ forecasts }) {
  return (
    <>
      { forecasts.map((f, i) =>
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card { ...f } />
          </Grid>
        )
      }
    </>
  )
}

Cards.propTypes = {
  forecasts: array.isRequired,
}

export default Cards;
