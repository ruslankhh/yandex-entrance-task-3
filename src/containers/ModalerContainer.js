import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { clearEvent, hideModal } from '../actions';
import { REMOVE_EVENT_MUTATION } from '../requests';

import Modaler from '../components/Modaler/Modaler';

const mapStateToProps = (state) => ({
  modal: state.app.modal
});

const mapDispatchToProps = {
  onModalButtonCloseClick: hideModal,
  clearEvent
};

const ModalerWithMutation = graphql(
  REMOVE_EVENT_MUTATION,
  { name: 'removeEventMutate' }
)(Modaler);

const ModalerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalerWithMutation);

export default ModalerContainer;
