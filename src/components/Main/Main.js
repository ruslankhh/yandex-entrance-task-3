import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import EventDiagramContainer from '../../containers/EventDiagramContainer';
import EventFormContainer from '../../containers/EventFormContainer';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={EventDiagramContainer} />
        <Route exact path="/event" component={EventFormContainer} />
      </Switch>
    );
  }
}

export default Main;
