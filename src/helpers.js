import pako from 'pako';
import gzip from './assets/city.list.json.gz';

const defaultCity = "Ciudad de México";
const defaultCountry = "MX";
const defaultId = 3527646; // Id de CDMX
const cities = {
  parsed: false,
  data: []
};
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const codes = {
  MX: 'Mexico',
  US: 'United States of America',
  UK: 'United Kindom',
  FR: 'France',
};
const kelvinRatio = 273.15;

const buildURL = (id = defaultId) => {
  const params = new URLSearchParams({
    id,
    appid: process.env.REACT_APP_APP_ID,
  }).toString();
  
  return `${URL}?${params}`
}

const getCities = async () => {
  if (cities.parsed) return cities.data;

  try {
    const r = await fetch(gzip);
    const b = await r.blob();
    const buf = await b.arrayBuffer();
    const c = new Uint8Array(buf);
    const s = pako.inflate(c, { to: 'string' });
    cities.data = JSON.parse(s);
    cities.parsed = true;
    return cities.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

const getCitiesByCountry = async (country = defaultCountry) =>
  (await getCities()).filter(c => c.country === country)

const getCityByNameAndCountry = async (city = defaultCity, country = defaultCountry) =>
  (await getCitiesByCountry(country)).find(c => c.name === city)

const getCityByName = async (city = defaultCity) =>
  (await getCities()).find(c => c.name === city)

const getWeatherById = async (id = defaultId) => {
  try {
    const r = await fetch(buildURL(id));
    return await r.json();
  } catch(e) {
    console.error(e);
    return {};
  }
}

const getCountryByCode = (code = defaultCountry) => codes[code]

const objectIsEmpty = (obj = {}) =>
  Object.keys(obj).length === 0 && obj.constructor === Object

const kelvin2celcius = (t = kelvinRatio) => parseInt(t - kelvinRatio, 10);

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours(); 
  const minutes = date.getMinutes();
  const timezone = date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

  return `as of ${hours}:${String(minutes).padStart(2, '0')} ${timezone}`
}

const getIcon = (weather)  => {
  const hours = (new Date()).getHours();

  let time = 'night';
  if (7 < hours && hours < 19) {
    time = 'day';
  }

  const current = (weather => {
    switch (weather.toLowerCase()) {
      case 'cloud':
      case 'clouds': 
      case 'haze':
        return 'cloudy-';
      default:
        return '';
    }
  })(weather);

  return `${current}${time}-1`;
} 

export {
  getCityByNameAndCountry,
  getCityByName,
  getCountryByCode,
  getCurrentTime,
  getIcon,
  getWeatherById,
  kelvin2celcius,
  objectIsEmpty,
};
