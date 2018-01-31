import { connect } from 'react-redux';
import { compose, graphql } from 'react-apollo';
import { showModal, clearEvent } from '../actions';
import {
  CREATE_EVENT_MUTATION,
  UPDATE_EVENT_MUTATION,
  REMOVE_USER_FROM_EVENT_MUTATION,
  ADD_USER_TO_EVENT_MUTATION,
  CHANGE_EVENT_ROOM_MUTATION
} from '../requests';

import Footer from '../components/Footer/Footer';

const mapStateToProps = (state) => ({
  date: state.app.date,
  event: state.app.event,
  location: state.router.location
});

const mapDispatchToProps = {
  onButtonCloseClick: clearEvent,
  showModal
};

const FooterWithMutation = compose(
  graphql(CREATE_EVENT_MUTATION, { name: 'createEventMutate' }),
  graphql(UPDATE_EVENT_MUTATION, { name: 'updateEventMutate' }),
  graphql(REMOVE_USER_FROM_EVENT_MUTATION, { name: 'removeUserFromEventMutate' }),
  graphql(ADD_USER_TO_EVENT_MUTATION, { name: 'addUserToEventMutate' }),
  graphql(CHANGE_EVENT_ROOM_MUTATION, { name: 'changeEventRoomMutate' })
)(Footer);

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterWithMutation);

export default FooterContainer;
