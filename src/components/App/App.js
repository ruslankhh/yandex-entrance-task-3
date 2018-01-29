import React, { Component } from 'react';
import './App.css';

import FooterContainer from '../../containers/FooterContainer';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <div className="app page--index">
        <Header />
        <Main />
        <FooterContainer/>
      </div>
    );
  }
}

export default App;
