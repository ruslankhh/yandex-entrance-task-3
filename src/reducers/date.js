const date = (state = null, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return new Date(action.date);

    case 'INCREMENT_DATE':
      return new Date((new Date(state)).getTime() + 24 * 60 * 60 * 1000);

    case 'DECREMENT_DATE':
      return new Date((new Date(state)).getTime() - 24 * 60 * 60 * 1000);

    default:
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      return state || today;
  }
};

export default date;
