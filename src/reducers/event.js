const event = (state = null, { type, event }) => {
  switch (type) {
    case 'SET_EVENT':
      if (!event) {
        return null;
      }

      const date = event.date ? event.date : event.dateStart ?
        (new Date(event.dateStart)).toISOString().slice(0, 10) : null;
      const timeStart = event.timeStart ? event.timeStart : event.dateStart ?
        (new Date(event.dateStart)).toTimeString().slice(0, 5) : null;
      const timeEnd = event.timeEnd ? event.timeEnd : event.dateEnd ?
        (new Date(event.dateEnd)).toTimeString().slice(0, 5) : null;
      const dateStart = date && timeStart ?
        new Date((new Date(date))
          .setHours(timeStart.slice(0, 2), timeStart.slice(3, 5))
        ) : event.dateStart;
      const dateEnd = date && timeEnd ?
        new Date((new Date(date))
          .setHours(timeEnd.slice(0, 2), timeEnd.slice(3, 5))
        ) : event.dateEnd;

      const isCreated = !!event.isCreated;
      const isCorrect =
        !!event.title &&
        !Number.isNaN(Date.parse(dateStart)) &&
        !Number.isNaN(Date.parse(dateEnd)) &&
        dateEnd > dateStart &&
        !!event.room;

      return {
        ...event,
        isCorrect,
        isCreated,
        date,
        dateStart,
        dateEnd,
        timeStart,
        timeEnd
      };

    case 'CLEAR_EVENT':
      return null;

    default:
      return state;
  }
};

export default event;
