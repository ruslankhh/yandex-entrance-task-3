export const setDate = (date) => ({
  type: 'SET_DATE',
  date
});

export const incrementDate = () => ({
  type: 'INCREMENT_DATE'
});

export const decrementDate = () => ({
  type: 'DECREMENT_DATE'
});

export const addEvent = (event) => ({
  type: 'ADD_TODO',
  event
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});
