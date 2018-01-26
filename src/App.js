import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './images/logo.svg';
import './styles/app.css';

import Button from './components/Button/Button';
import EventForm from './components/EventForm/EventForm';

const Home = () => (
  <div className="container">
    <div className="grid grid--center grid--padding-false">
      <h3 className="grid__item">Главная</h3>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app page--event">
          <header className="header">
            <img className="image" src={logo} alt="Яндекс.Переговорки"/>
            <Route exact path="/" render={() => (
              <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
            )}/>
          </header>
            {(() => {
              if (this.props.data.loading) {
                return (
                  <main className="body">
                    <div className="container">
                      <div className="grid grid--center grid--padding-false">
                        <h3 className="grid__item">Загрузка...</h3>
                      </div>
                    </div>
                  </main>
                );
              } else if (this.props.data.error) {
                return (
                  <main className="body">
                    <p>{this.props.data.error.message}</p>
                  </main>
                );
              } else {
                return (
                  <main className="body">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/event" users={this.props.data.users} component={EventForm}/>
                  </main>
                );
              }
            })()}
          <Route exact path="/event" render={() => (
            <footer className="footer">
              <Button mods={['type-secondary', 'size-md']}>Отмена</Button>
              <Button mods={['type-primary', 'size-md']}>Создать встречу</Button>
            </footer>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
