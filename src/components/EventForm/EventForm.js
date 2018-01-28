import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';
import ButtonCheckbox from '../ButtonCheckbox/ButtonCheckbox';
import Input from './../Input/Input';
import InputDatalist from '../InputDatalist/InputDatalist';
import ModalEventRemove from '../ModalEventRemove/ModalEventRemove';
import RoomItem from '../RoomItem/RoomItem';
import UsersList from '../UsersList/UsersList';

class EventForm extends Component {
  render() {
    const { block } = createBlock(this.props);
    const usersInputDatalist = this.props.data.users ? this.props.data.users
      .map(user => ({ ...user, label: `${user.homeFloor} этаж`, value: user.login })) : '';

    return (
      <main className={block('body', null, 'event-form')}>
        <div className="container container--width-md container--center">
          <h3 className="title">
            <span>Новая встреча</span>
            <Button to="/" mods={{ icon: 'close', size: 'xs', circle: true }} mix="title__button" />
          </h3>
          <div className="grid grid--padding-bottom">
            <div className="grid__item grid__item--col-2">
              <Input mods={{ size: 'md' }} mix="title__button" id="theme" label="Тема" placeholder="О чём будете говорить?" />
            </div>
            <div className="grid__item grid__item--col-2">
              <div className="input-group input-group--type-date">
                <Input mods={{ size: 'md' }} mix="input-group__item" id="date" type="date" label="Дата" />
                <Input mods={{ size: 'md' }} mix="input-group__item" id="timestart" type="time" label="Начало" />
                <div className="input-group__separator">—</div>
                <Input mods={{ size: 'md' }} mix="input-group__item" id="timeend" type="time" label="Конец" />
              </div>
            </div>
            <div className="grid__item grid__item--col-2">
              <InputDatalist
                mods={{ size: 'md' }}
                id="users"
                label="Участники"
                placeholder="Например, Тор Одинович"
                options={usersInputDatalist}
              />
              <UsersList users={this.props.data.users} />
            </div>
            <div className="grid__item grid__item--col-2">
              <h6>Рекомендованные переговорки</h6>
              <div className="button-group button-group--width-full">
                <ButtonCheckbox id="rooms-1" mods={{ size: 'md' }} mix="button-group__item">
                  <RoomItem mods={{ type: 'short' }} time="16:00—16:30" room="Готем" floor="4 этаж" />
                </ButtonCheckbox>
                <ButtonCheckbox id="rooms-2" mods={{ size: 'md' }} mix="button-group__item">
                  <RoomItem mods={{ type: 'short' }} time="16:00—16:30" room="Поле непаханное" floor="4 этаж" />
                </ButtonCheckbox>
                <ButtonCheckbox id="rooms-3" mods={{ size: 'md' }} mix="button-group__item">
                  <RoomItem mods={{ type: 'short' }} time="16:00—16:30" room="Тёмная башня" floor="4 этаж" />
                </ButtonCheckbox>
              </div>
            </div>
          </div>
        </div>
        <ModalEventRemove mods={{ opened: false }} />
      </main>
    );
  }
}

export default EventForm;
