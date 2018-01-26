import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/app.css';

import EventDiagram from './components/EventDiagram/EventDiagram';
import EventForm from './components/EventForm/EventForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          {(() => {
            if (this.props.data.loading) {
              return;
            }
            if (this.props.data.error) {
              console.error(this.props.data.error.message);

              return;
            }

            return (
              <main className="body">
                <Route exact path="/" component={EventDiagram}/>
                <Route exact path="/event" component={EventForm}/>
              </main>
            );
          })()}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
