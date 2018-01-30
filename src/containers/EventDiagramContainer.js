import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { incrementDate, decrementDate, setEvent } from '../actions';
import { APP_QUERY } from '../requests';

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

const mapDataToProps = ({ ownProps, data }) => {
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
const options = ({ shouldPoll }) => ({
  pollInterval: 1000,
});

const EventDiagramWithData = graphql(
  APP_QUERY,
  { props: mapDataToProps, options }
)(EventDiagram);

const EventDiagramContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDiagramWithData);

export default EventDiagramContainer;
