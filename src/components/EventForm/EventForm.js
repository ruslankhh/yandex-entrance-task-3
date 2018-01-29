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
    const title = this.props.event && this.props.event.isCreated ?
      'Редактирование встречи': 'Новая встреча';
    const roomTitle = this.props.event && this.props.event.isCreated ?
      'Ваша переговорка' : 'Рекомендованные переговорки';
    const eventTitle = this.props.event && this.props.event.title ?
      this.props.event.title : '';
    const eventDate = this.props.event && this.props.event.dateStart ?
      (new Date(this.props.event.dateStart)).toISOString().slice(0, 10) : '';
    const eventTimeStart = this.props.event && this.props.event.dateStart ?
      (new Date(this.props.event.dateStart)).toTimeString().slice(0, 5) : '';
    const eventTimeEnd = this.props.event && this.props.event.dateEnd ?
      (new Date(this.props.event.dateEnd)).toTimeString().slice(0, 5) : '';
    const roomTimeRange = `${eventTimeStart}-${eventTimeEnd}`;
    const usersInputDatalist = this.props.users ? this.props.users
      .map(user => ({ ...user, label: `${user.homeFloor} этаж`, value: user.login })) : '';

    return (
      <main className={block('body', null, 'event-form')}>
        <div className="container container--width-md container--center">
          <h3 className="title">
            <span>{title}</span>
            <Button
              to="/"
              mods={{ icon: 'close', size: 'xs', circle: true }}
              mix="title__button"
              onClick={this.props.onButtonCloseClick}
            />
          </h3>
          <div className="grid grid--padding-bottom">
            <div className="grid__item grid__item--col-2">
              <Input
                mods={{ size: 'md' }}
                mix="title__button"
                id="theme"
                label="Тема"
                placeholder="О чём будете говорить?"
                defaultValue={eventTitle}
              />
            </div>
            <div className="grid__item grid__item--col-2">
              <div className="input-group input-group--type-date">
                <Input
                  mods={{ size: 'md' }}
                  mix="input-group__item"
                  id="date"
                  type="date"
                  label="Дата"
                  placeholder="mm/dd/yyyy"
                  defaultValue={eventDate}
                />
                <Input
                  mods={{ size: 'md' }}
                  mix="input-group__item"
                  id="timestart"
                  type="time"
                  label="Начало"
                  placeholder="--:--"
                  defaultValue={eventTimeStart}
                />
                <div className="input-group__separator">—</div>
                <Input
                  mods={{ size: 'md' }}
                  mix="input-group__item"
                  id="timeend"
                  type="time"
                  label="Конец"
                  placeholder="--:--"
                  defaultValue={eventTimeEnd}
                />
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
              <UsersList users={this.props.event ? this.props.event.users : ''} />
            </div>
            <div className="grid__item grid__item--col-2">
              <h6>{roomTitle}</h6>
              {this.props.event && this.props.event.isCreated ? (() => (
                <div className="button-group button-group--width-full">
                  <ButtonCheckbox id="rooms-1" mods={{ size: 'md' }} mix="button-group__item" defaultChecked={true}>
                    <RoomItem
                      mods={{ type: 'short' }}
                      time={roomTimeRange}
                      {...this.props.event.room}
                    />
                  </ButtonCheckbox>
                </div>
              ))() : (() => (
                <div className="button-group button-group--width-full">
                  <ButtonCheckbox id="rooms-1" mods={{ size: 'md' }} mix="button-group__item">
                    <RoomItem mods={{ type: 'short' }} time="16:00—16:30" title="Готем" floor="4" />
                  </ButtonCheckbox>
                  <ButtonCheckbox id="rooms-2" mods={{ size: 'md' }} mix="button-group__item">
                    <RoomItem mods={{ type: 'short' }} time="16:00—16:30" title="Поле непаханное" floor="4" />
                  </ButtonCheckbox>
                  <ButtonCheckbox id="rooms-3" mods={{ size: 'md' }} mix="button-group__item">
                    <RoomItem mods={{ type: 'short' }} time="16:00—16:30" title="Тёмная башня" floor="4" />
                  </ButtonCheckbox>
                </div>
              ))()}
            </div>
          </div>
        </div>
        <ModalEventRemove mods={{ opened: false }} />
      </main>
    );
  }
}

export default EventForm;
