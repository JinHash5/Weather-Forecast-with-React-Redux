import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){
  switch(action.type){
    case FETCH_WEATHER :
      // return state.push(action.payload.data);    Never mutate state, send in a new instance which consists of previous data as well
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
