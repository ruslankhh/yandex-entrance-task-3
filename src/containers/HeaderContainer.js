import { connect } from 'react-redux';
import { setEvent } from '../actions';

import Header from '../components/Header/Header';

const mapStateToProps = (state) => ({
  date: state.app.date,
  event: state.app.event,
  location: state.router.location
});

const mapDispatchToProps = {
  onButtonClick: setEvent
};


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
