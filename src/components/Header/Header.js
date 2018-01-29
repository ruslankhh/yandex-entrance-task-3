import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './../../images/logo.svg';

import Button from './../Button/Button';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="image" src={logo} alt="Яндекс.Переговорки"/>
        <Switch>
          <Route exact path="/" render={() => (
            <Button to="/event" mods={{ type: 'primary', size: 'md' }}>Создать встречу</Button>
          )}/>
        </Switch>
      </header>
    );
  }
}

export default Header;
