import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/app.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Main data={this.props.data} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
