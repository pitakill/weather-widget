import React from 'react';
import Card from './Card';
import Loader from './Loader';
import {
  getCityByNameAndCountry,
  getCountryByCode,
  getCurrentTime,
  getWeatherById,
  kelvin2celcius,
  objectIsEmpty,
} from '../helpers';

class App extends React.Component {
  state = {
    defaultCity: 'Mexico City',
    defaultCountry: 'MX',
    forecast: {},
  }

  async componentDidMount() {
    try {
      const city = await getCityByNameAndCountry(this.state.defaultCity, this.state.defaultCountry);
      const forecast = await getWeatherById(city.id); 
      this.setState({ forecast });
    } catch(e) {
      console.error(e);
    }
  }

  render () {
    const { forecast,defaultCity, defaultCountry } = this.state;
    return (
      objectIsEmpty(forecast)
      ? <Loader 
          city={ defaultCity }
          country={ getCountryByCode(defaultCountry) }
        />
      : <Card 
          city={ forecast.name }
          country={ getCountryByCode(forecast.sys.country) }
          temp={ kelvin2celcius(forecast.main.temp) }
          max={ kelvin2celcius(forecast.main.temp_max) }
          min={ kelvin2celcius(forecast.main.temp_min) }
          sky={ forecast.weather[0].main }
          timestamp={ getCurrentTime() }
          feelsLike={ kelvin2celcius(forecast.main.feels_like) }
        />
    );
  }
}

export default App;
