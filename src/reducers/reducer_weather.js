import { FETCH_WEATHER } from '../actions/index';

//first argument is always state in a reducer
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //this is the same as 'return state.concat([action.payload.data]);'
      //it creates a new array and puts action.payload.data inside, then
      //the ... says this argument might be an array, so take all of its entries
      //and add them to the new array. New record is on top now
      //looks like [city, city, city], NOT [city, [city, city]].
      return [action.payload.data, ...state ];
      break;
  }
  console.log('Action received', action);

  return state;
}
