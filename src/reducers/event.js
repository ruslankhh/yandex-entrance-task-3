const event = (state = null, { type, event }) => {
  switch (type) {
    case 'SET_EVENT':
      if (!event) {
        return null;
      }

      const oldDateStart = event.dateStart || null;
      const dateStart =
        (event.date || oldDateStart) && event.timeStart ?
        new Date((new Date(event.date || oldDateStart))
          .setHours(event.timeStart.slice(0, 2), event.timeStart.slice(3, 5))
        ) :
        oldDateStart;

      const oldDateEnd = event.dateEnd || null;
      const dateEnd =
        (event.date || oldDateEnd) && event.timeEnd ?
        new Date((new Date(event.date || oldDateEnd))
          .setHours(event.timeEnd.slice(0, 2), event.timeEnd.slice(3, 5))
        ) :
        oldDateEnd;

      return { ...event, dateStart, dateEnd };

    case 'CLEAR_EVENT':
      return null;

    default:
      return state;
  }
};

export default event;
