import { combineReducers } from 'redux';
import events from './events';
import visibilityFilter from './visibilityFilter';

const app = combineReducers({
  events,
  visibilityFilter
});

export default app;
