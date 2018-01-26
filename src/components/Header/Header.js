import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './../../images/logo.svg';

import Button from './../Button/Button';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="image" src={logo} alt="Яндекс.Переговорки"/>
        <Route exact path="/" render={() => (
          <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
        )}/>
      </header>
    );
  }
}

export default Header;
