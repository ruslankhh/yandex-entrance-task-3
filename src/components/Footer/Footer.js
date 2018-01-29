import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Button from './../Button/Button';

class Footer extends Component {
  render() {
    const props1 = {
      mods: { type: 'secondary', size: 'md' },
      onClick: this.props.onButtonCloseClick
    };
    const props2 = {
      mods: { type: 'primary', size: 'md' },
      onClick: this.props.onButtonCloseClick
    };

    return (
      <Switch>
        <Route exact path="/event" render={() =>
          this.props.event && this.props.event.isCreated ? (
            <footer className="footer">
              <Button to="/" {...props1}>Отмена</Button>
              <Button to="/" {...props1}>Удалить встречу</Button>
              <Button to="/" {...props1}>Сохранить</Button>
            </footer>
          ) : (
            <footer className="footer">
              <Button to="/" {...props1}>Отмена</Button>
              <Button to="/" {...props2}>Создать встречу</Button>
            </footer>
          )
        }/>
      </Switch>
    );
  }
}

export default Footer;
