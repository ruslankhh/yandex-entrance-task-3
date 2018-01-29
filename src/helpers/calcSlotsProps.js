export const calcSlotsProps = (props) => {
  const { date } = props;
  const HOUR = 60 * 60 * 1000;
  const STOP = 100;
  let slotsProps = [];
  let counter = 0;

  // TODO: Update graphql query for this sorting and remove it.
  const events = props.events ? props.events.sort((event1, event2) => {
    if (event1.dateStart > event2.dateStart) return 1;
    if (event1.dateStart < event2.dateStart) return -1;

    return 0;
  }) : [];

  const disableProps = [
    { mods: { type: 'secondary', disabled: true } },
    { mods: { type: 'secondary', disabled: true } }
  ];

  let dateStart = new Date(date.getTime() + 8 * HOUR);
  let dateEnd = new Date(date.getTime() + 9 * HOUR);
  let dateStop = new Date(date.getTime() + 23 * HOUR);

  let eventIndex = 0;
  let eventDateStart = events && events[eventIndex] ?
    new Date(events[eventIndex].dateStart) : '';
  let eventDateEnd = events && events[eventIndex] ?
    new Date(events[eventIndex].dateEnd) : '';

  // TODO: Add `disabled: true` for slotProp which time is over
  while (dateStart < dateStop && counter < STOP) {
    let slotProp;
    let dateEndHour = new Date(dateEnd.getTime() + HOUR);

    if (!eventDateStart || dateStart !== eventDateStart) {
      let slotDateEnd = eventDateStart && eventDateStart <= dateEnd ?
        eventDateStart : dateEnd;

      slotProp = {
        mods: { type: 'primary' },
        dateStart,
        dateEnd: slotDateEnd,
        room: props.room
      };

      dateStart = slotDateEnd;
      dateEnd = eventDateStart && eventDateStart <= dateEndHour ?
        eventDateStart : dateEndHour;
    } else {
      slotProp = {
        mods: { type: 'secondary' },
        dateStart: eventDateStart,
        dateEnd: eventDateEnd,
        event: events[eventIndex],
        room: props.room
      };

      dateStart = eventDateEnd;
      dateEnd = eventDateEnd > dateEnd ? (
        new Date(
          eventDateEnd.getFullYear(),
          eventDateEnd.getMonth(),
          eventDateEnd.getDate(),
          eventDateEnd.getHours() + 1
        )
      ) : dateEnd;
      eventIndex = eventIndex + 1;
      eventDateStart = events[eventIndex] ?
        new Date(events[eventIndex].dateStart) : '';
      eventDateEnd = events[eventIndex] ?
        new Date(events[eventIndex].dateEnd) : '';
    }

    slotProp.duration = slotProp.dateEnd.getTime() - slotProp.dateStart.getTime();
    slotsProps = [...slotsProps, slotProp];
    counter = counter + 1;
  }

  slotsProps = [disableProps[0], ...slotsProps, disableProps[1]];

  return slotsProps;
}
