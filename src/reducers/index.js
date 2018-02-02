import { combineReducers } from 'redux';
import date from './date';
import dateNow from './dateNow';
import event from './event';
import modal from './modal';

const reducer = combineReducers({
  date,
  dateNow,
  event,
  modal
});

export default reducer;
