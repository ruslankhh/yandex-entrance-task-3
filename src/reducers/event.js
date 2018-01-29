const event = (state = null, action) => {
  switch (action.type) {
    case 'SET_EVENT':
      return action.event;

    case 'CLEAR_EVENT':
      return null;

    default:
      return state;
  }
};

export default event;
