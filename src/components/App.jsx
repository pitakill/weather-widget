import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Card from './Card';
import Loader from './Loader';
import Form from './Form';
import Main from './Main';
import Menu from './Menu';
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

function App() {
  const [cities, setCities] = React.useState([]);
  const [forecasts, setForecasts] = React.useState([]);

  React.useEffect(() => {
    async function getForecasts() {
      try {
        const mexicoCities = await getCitiesByCountry(defaultCountry);
        // Buscar las ciudades por defecto
        const wantedCities = mexicoCities.filter(
          city => defaultCities.includes(city.name)
        );

        // Traer información de cada una de las ciudades buscadas
        const forecasts = await Promise.all(
          wantedCities.map(
            async city => await getWeatherById(city.id)
          )
        );

        setCities(wantedCities);
        setForecasts(forecasts);
      } catch(e) {
        console.error(e);
      }
    }
    getForecasts();
  }, []);

  const requestCity = async name => {
    const city = await getCityByNameAndCountry(name, defaultCountry);

    // Si no hay ciudad con ese nombre, salimos de la función.
    if (!city) return;

    const forecast = await getWeatherById(city.id);

    setCities([...cities, city]);
    setForecasts([...forecasts, forecast]);
  }

  return (
    <BrowserRouter>
      <Menu />
      <Main>
        <Route exact path="/" component={ () =>
          forecasts.length === 0
          ? <Loader
              country={ getCountryByCode(defaultCountry) }
            />
          : <>
              <Form onSubmit={ requestCity } />
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
        } />
        <Route exact path="/test" component={()=> "Hola"} />
      </Main>
    </BrowserRouter>
  );
}

export default App;
