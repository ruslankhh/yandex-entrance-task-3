import { combineReducers } from 'redux';
import date from './date';
import event from './event';

const reducer = combineReducers({
  date,
  event
});

export default reducer;
