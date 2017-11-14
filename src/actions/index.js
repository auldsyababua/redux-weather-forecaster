import axios from'axios';

const API_KEY = "f4d139428d706a0cdf9321e306346d7f";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//keep action types consistent by placing the type string a variable
export const FETCH_WEATHER = 'FETCH_WEATHER';

//action creator who's action makes a request to the backend API.
//takes a city name (string) from input on form, and uses it as part of the search query
//calling an action creator called fetchWeather
//axios.get is similar to a jQuery ajax method, using a get request for the url above
//and returns a promise
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:', request)

  //promise from above passed into the payload
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
