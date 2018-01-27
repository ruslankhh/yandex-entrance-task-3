import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app page--index">
          <Header />
          <Main data={this.props.data} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
