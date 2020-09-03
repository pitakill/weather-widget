import React from 'react';
import CardMui from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { string } from 'prop-types';
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
    <CardMui elevation={3}>
      <CardHeader 
        title={ `${city}, ${getCountryByCode(country)} Weather` }
        subheader={ getCurrentTime() }
      />
      <CardContent>
        <CurrentWeather 
          max={ kelvin2celcius(temp_max) }
          min={ kelvin2celcius(temp_min) }
          sky={ weather[0].main }
          temp={ kelvin2celcius(temp) }
        />
        <Typography variant="h6">
          feels like { kelvin2celcius(feels_like) }°
        </Typography>
      </CardContent>
    </CardMui>
  )
}

Card.propTypes = {
  name: string.isRequired,
}

export default Card;
