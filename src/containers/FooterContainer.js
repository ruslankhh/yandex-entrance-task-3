import { connect } from 'react-redux';

import Footer from '../components/Footer/Footer';

const mapStateToProps = (state, ownProps) => ({
  date: state.app.date,
  event: state.app.event,
  ownProps
});

const mapDispatchToProps = {};

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

export default FooterContainer;
