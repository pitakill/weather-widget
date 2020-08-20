import React from 'react';
import Card from './Card';
import Loader from './Loader';
import Form from './Form';
import {
  getCitiesByCountry,
  getCityByNameAndCountry,
  getCountryByCode,
  getCurrentTime,
  getWeatherById,
  kelvin2celcius,
} from '../helpers';

const defaultCities = [
  'Mexico City',
  'Guadalajara',
  'Monterrey',
];
const defaultCountry = 'MX';

class App extends React.Component {
  state = {
    cities: defaultCities,
    country: defaultCountry,
    forecasts: [],
    value: '',
  }

  async componentDidMount() {
    try {
      const mexicoCities = await getCitiesByCountry(this.state.country);
      // Buscar las ciudades por defecto
      const wantedCities = mexicoCities.filter(
        city => this.state.cities.includes(city.name)
      );

      // Traer información de cada una de las ciudades buscadas
      const forecasts = await Promise.all(
        wantedCities.map(
          async city => await getWeatherById(city.id)
        )
      );

      this.setState({ forecasts });
    } catch(e) {
      console.error(e);
    }
  }

  requestCity = async name => {
    const city = await getCityByNameAndCountry(name, this.state.country);

    // Si no hay ciudad con ese nombre, salimos de la función.
    if (!city) return;

    const forecast = await getWeatherById(city.id);

    this.setState({ 
      cities: [...this.state.cities, city],
      forecasts: [...this.state.forecasts, forecast],
    })
  }

  render () {
    const { forecasts, defaultCity, defaultCountry } = this.state;
    return (
      forecasts.length === 0
      ? <Loader 
          city={ defaultCity }
          country={ getCountryByCode(defaultCountry) }
        />
      : <>
          <Form onSubmit={ this.requestCity } />
          {
            forecasts.map(forecast =>
              <Card 
                key={ forecast.id }
                city={ forecast.name }
                country={ getCountryByCode(forecast.sys.country) }
                temp={ kelvin2celcius(forecast.main.temp) }
                max={ kelvin2celcius(forecast.main.temp_max) }
                min={ kelvin2celcius(forecast.main.temp_min) }
                sky={ forecast.weather[0].main }
                timestamp={ getCurrentTime() }
                feelsLike={ kelvin2celcius(forecast.main.feels_like) }
              />
            )
          }
        </>
    );
  }
}

export default App;
