import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Button from './../Button/Button';

class Footer extends Component {
  render() {
    return (
      <Route exact path="/event" render={() => (
        <footer className="footer">
          <Button mods={['type-secondary', 'size-md']}>Отмена</Button>
          <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
        </footer>
      )}/>
    );
  }
}

export default Footer;
