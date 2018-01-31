const event = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        type: action.modal.type,
        event: action.modal.event
      };

    case 'HIDE_MODAL':
      return null;

    default:
      return state;
  }
};

export default event;
