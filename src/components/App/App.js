import React, { Component } from 'react';
import './App.css';

import FooterContainer from '../../containers/FooterContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="app page--index">
        <HeaderContainer />
        <Main />
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
