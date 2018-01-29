import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { incrementDate, decrementDate, setEvent } from '../actions';
import { APP_QUERY } from '../queries';

import EventDiagram from '../components/EventDiagram/EventDiagram';

const mapStateToProps = (state) => ({
  event: state.app.event,
  date: state.app.date
});

const mapDispatchToProps = {
  onDatePickerButtonLeftClick: decrementDate,
  onDatePickerButtonRightClick: incrementDate,
  onSlotButtonClick: setEvent
};

const mapResultToProps = ({ ownProps, data }) => {
  if (data.loading || data.error) {
    return data;
  }

  const events = data.events.filter(event => {
    const eventDate = new Date(event.dateStart);
    const appDate = ownProps.date ? new Date(ownProps.date) : new Date();
    return eventDate.toDateString() === appDate.toDateString();
  });

  return ({
    events,
    rooms: data.rooms
  })
};

const EventDiagramWithDate = graphql(
  APP_QUERY,
  { props: mapResultToProps }
)(EventDiagram);

const EventDiagramContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDiagramWithDate);

export default EventDiagramContainer;
