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
      <Switch>
        <Route exact path="/" render={() =>
          <EventDiagram data={this.props.data} />
        }/>
        <Route exact path="/event" render={() =>
          <EventForm data={this.props.data} />
        }/>
      </Switch>
    );
  }
}

export default Main;
