import { combineReducers } from 'redux';
import cards from './cards';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  cards,
  routing: routerReducer
});

export default rootReducer;
