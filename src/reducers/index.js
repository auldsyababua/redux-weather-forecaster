import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// the books reducer is added as a key/value pair to our global app state
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
