import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/app.css';

import Button from './components/Button/Button';
import EventForm from './components/EventForm/EventForm';

class App extends Component {
  render() {
    return (
      <div className="app page--event">
        <header className="header">
          <img className="image" src={logo} alt="Яндекс.Переговорки"/>
          <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
        </header>
        <div className="body">
          {(() => {
            if (this.props.data.loading) {
              return <p>Loading...</p>;
            } else if (this.props.data.error) {
              return <p>{this.props.data.error.message}</p>;
            } else {
              return <EventForm users={this.props.data.users} />;
            }
          })()}
        </div>
        <footer className="footer">
          <Button mods={['type-secondary', 'size-md']}>Отмена</Button>
          <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
        </footer>
      </div>
    );
  }
}

export default App;
