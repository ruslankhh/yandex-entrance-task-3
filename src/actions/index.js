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

export const setEvent = (event) => ({
  type: 'SET_EVENT',
  event
});

export const clearEvent = () => ({
  type: 'CLEAR_EVENT'
});

export const showModal = (modal) => ({
  type: 'SHOW_MODAL',
  modal
});

export const hideModal = () => ({
  type: 'HIDE_MODAL'
});
