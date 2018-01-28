const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        {
          title: action.title,
          dateStart: action.dateStart,
          dateEnd: action.dateEnd,
          users: action.users,
          room: action.room
        }
      ];

    case 'EDIT_EVENT':
      return state.map(event => {
        if (event.id === action.id) {
          return {
            ...event,
            title: action.title,
            dateStart: action.dateStart,
            dateEnd: action.dateEnd,
            users: action.users,
            room: action.room
          };
        }

        return event;
      });

    case 'REMOVE_EVENT':
      return state.filter(event => event.id === action.id);

    default:

      return state;
  }
};

export default events;
