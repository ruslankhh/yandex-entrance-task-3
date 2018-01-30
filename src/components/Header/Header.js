import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './../../images/logo.svg';

import Button from './../Button/Button';

class Header extends Component {
  render() {
    const { onButtonClick } = this.props;
    const buttonProps = {
      mods: { type: 'primary', size: 'md' },
      onClick: () => onButtonClick({ isCreated: false })
    };

    return (
      <header className="header">
        <img className="image" src={logo} alt="Яндекс.Переговорки"/>
        <Route exact path="/" render={() => (
          <Button to="/event" {...buttonProps}>Создать встречу</Button>
        )}/>
      </header>
    );
  }
}

export default Header;
