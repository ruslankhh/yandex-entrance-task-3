import React, { Component } from 'react';

import Button from './../Button/Button';
import ButtonCheckbox from '../ButtonCheckbox/ButtonCheckbox';
import Input from './../Input/Input';
import InputDatalist from '../InputDatalist/InputDatalist';
import RoomItem from '../RoomItem/RoomItem';
import UsersList from '../UsersList/UsersList';

class EventForm extends Component {
  render() {
    const className = "event-form";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];
    const usersInputDatalist = this.props.users ? this.props.users
      .map(user => ({ ...user, label: `${user.homeFloor} этаж`, value: user.login })) : '';

    return (
      <div className={classNames.join(' ')} id={this.props.id}>
        <div className="container container--width-md container--center">
          <h3 className="title">
            <span>Новая встреча</span>
            <Button mods={['icon-close', 'size-xs', 'circle']} mix="title__button" />
          </h3>
          <div className="grid grid--padding-bottom">
            <div className="grid__item grid__item--col-2">
              <Input mods="size-md" mix="title__button" id="theme" label="Тема" placeholder="О чём будете говорить?" />
            </div>
            <div className="grid__item grid__item--col-2">
              <div className="input-group input-group--type-date">
                <Input mods="size-md" mix="input-group__item" id="date" type="date" label="Дата" />
                <Input mods="size-md" mix="input-group__item" id="timestart" type="time" label="Начало" />
                <div className="input-group__separator">—</div>
                <Input mods="size-md" mix="input-group__item" id="timeend" type="time" label="Конец" />
              </div>
            </div>
            <div className="grid__item grid__item--col-2">
              <InputDatalist mods="size-md" id="users" label="Участники" placeholder="Например, Тор Одинович" options={usersInputDatalist} />
              <UsersList users={this.props.users} />
            </div>
            <div className="grid__item grid__item--col-2">
              <h6>Рекомендованные переговорки</h6>
              <div className="button-group button-group--width-full">
                <ButtonCheckbox id="rooms-1" mods={['size-md']} mix="button-group__item">
                  <RoomItem mods="type-short" time="16:00—16:30" room="Готем" floor="4 этаж" />
                </ButtonCheckbox>
                <ButtonCheckbox id="rooms-2" mods={['size-md']} mix="button-group__item">
                  <RoomItem mods="type-short" time="16:00—16:30" room="Поле непаханное" floor="4 этаж" />
                </ButtonCheckbox>
                <ButtonCheckbox id="rooms-3" mods={['size-md']} mix="button-group__item">
                  <RoomItem mods="type-short" time="16:00—16:30" room="Тёмная башня" floor="4 этаж" />
                </ButtonCheckbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
