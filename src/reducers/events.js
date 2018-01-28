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

    default:
      return state;
  }
};

export default events;
