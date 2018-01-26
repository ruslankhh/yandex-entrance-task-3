import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import EventDiagram from './../EventDiagram/EventDiagram';
import EventForm from './../EventForm/EventForm';

class Main extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }
    if (this.props.data.error) {
      console.error(this.props.data.error.message);
      return null;
    }

    return (
      <main className="body">
        <Switch>
          <Route exact path="/" component={EventDiagram}/>
          <Route exact path="/event" component={EventForm}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
