import { combineReducers } from 'redux';
import events from './events';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
  events,
  visibilityFilter
});

export default reducer;
