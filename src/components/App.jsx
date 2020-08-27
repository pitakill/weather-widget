import React from 'react';
import Context from './Context';
import Loader from './Loader';
import Router from './Router';
import {
  getCitiesByCountry,
  getCityByNameAndCountry,
  getCountryByCode,
  getWeatherById,
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

  const letters = new Set();
  cities.forEach(city => letters.add(city.name.charAt(0)));

  return (
    <Context.Provider value={{
      forecasts,
      requestCity,
    }}>
      {
        forecasts.length === 0
        ? <Loader
            country={ getCountryByCode(defaultCountry) }
          />
          : <Router menu={ [...letters] } />
      }
    </Context.Provider>
  );
}

export default App;
