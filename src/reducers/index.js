import { combineReducers } from 'redux';
import date from './date';
import event from './event';
import modal from './modal';

const reducer = combineReducers({
  date,
  event,
  modal
});

export default reducer;
