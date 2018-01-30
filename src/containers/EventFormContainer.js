import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { setEvent, clearEvent } from '../actions';
import { APP_QUERY } from '../queries';

import EventForm from '../components/EventForm/EventForm';

const mapStateToProps = (state) => ({
  date: state.app.date,
  event: state.app.event
});

const mapDispatchToProps = {
  onInputChange: setEvent,
  onButtonUserRemoveClick: setEvent,
  onButtonCheckboxClick: setEvent,
  onButtonCloseClick: clearEvent
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
    rooms: data.rooms,
    users: data.users
  })
};

const EventFormWithDate = graphql(
  APP_QUERY,
  { props: mapResultToProps }
)(EventForm);

const EventFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventFormWithDate);

export default EventFormContainer;
