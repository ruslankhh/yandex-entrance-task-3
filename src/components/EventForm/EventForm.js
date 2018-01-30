import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';
import Input from './../Input/Input';
import InputDatalist from '../InputDatalist/InputDatalist';
import ModalEventRemove from '../ModalEventRemove/ModalEventRemove';
import RoomItem from '../RoomItem/RoomItem';
import UsersList from '../UsersList/UsersList';

class EventForm extends Component {
  render() {
    const { block } = createBlock(this.props);
    const {
      event,
      onButtonCloseClick,
      onButtonCheckboxClick,
      onButtonUserRemoveClick,
      onInputChange,
      rooms,
      users
    } = this.props;
    const title = event && event.isCreated ?
      'Редактирование встречи': 'Новая встреча';
    const eventUsers = event ? event.users : '';
    const usersInputDatalist = users ? users
      .map(user => ({ ...user, label: `${user.homeFloor} этаж`, value: user.login })) : '';

    // TODO: Update this with getRecommendation
    const roomTimeStart = event && event.timeStart ? event.timeStart : '08:00';
    const roomTimeEnd = event && event.timeEnd ? event.timeEnd : '09:00';
    const roomTimeRange = `${roomTimeStart}-${roomTimeEnd}`;
    const recommendationRooms = rooms;
    const isRecommendationShow = event && event.date &&
      event.timeStart && event.timeEnd && recommendationRooms;
    const roomTitle = event && event.room ? 'Ваша переговорка' :
      isRecommendationShow ? 'Рекомендованные переговорки' : '';

    const buttonCloseProps = {
      mods: { icon: 'close', size: 'xs', circle: true },
      mix: 'title__button',
      onClick: onButtonCloseClick
    };
    const inputTitleProps = {
      mods: { size: 'md' },
      mix: 'title__button',
      placeholder: 'О чём будете говорить?',
      defaultValue: event ? event.title : null,
      onChange: ({ target: { value }}) =>
        onInputChange({ ...event, title: value })
    };
    const inputDateProps = {
      mods: { size: 'md' },
      mix: 'input-group__item',
      placeholder: 'mm/dd/yyyy',
      defaultValue: event ? event.date : null,
      onChange: ({ target: { value }}) =>
        onInputChange({ ...event, date: value, room: null })
    };
    const inputTimeProps = {
      mods: { size: 'md' },
      mix: 'input-group__item',
      placeholder: '--:--'
    };
    const inputTimeStartProps = {
      ...inputTimeProps,
      defaultValue: event ? event.timeStart : null,
      onChange: ({ target: { value }}) =>
        onInputChange({ ...event, timeStart: value, room: null })
    };
    const inputTimeEndProps = {
      ...inputTimeProps,
      defaultValue: event ? event.timeEnd : null,
      onChange: ({ target: { value }}) =>
        onInputChange({ ...event, timeEnd: value, room: null })
    };
    const inputDatalistProps = {
      mods: { size: 'md' },
      placeholder: 'Например, Тор Одинович',
      options: usersInputDatalist,
      onInput: ({ target }) => {
        const { value } = target;
        const user = users ? users.find(user => user.login === value) : null;
        const oldEventUsers = event && event.users ? event.users : [];
        const oldEventUsersHash = oldEventUsers ? oldEventUsers.reduce((acc, user) => {
          return { ...acc, [user.login]: user };
        }, {}) : {};
        const eventUsers = user && !oldEventUsersHash[user.login] ?
          [...oldEventUsers, user] : oldEventUsers;
        const room = eventUsers.length > event.room.capacity ? null : event.room;

        if (user) {
          target.value = null;
        }

        onInputChange({ ...event, users: eventUsers, room });
      }
    };
    const roomItemProps = {
      mods: { type: 'short' },
      mix: 'button-group__item',
      time: roomTimeRange,
      event,
      onButtonCheckboxClick
    };

    return (
      <main className={block('body', null, 'event-form')}>
        <div className="container container--width-md container--center">
          <h3 className="title">
            <span>{title}</span>
            <Button to="/" {...buttonCloseProps} />
          </h3>
          <div className="grid grid--padding-bottom">
            <div className="grid__item grid__item--col-2">
              <Input id="title" label="Тема" {...inputTitleProps} />
            </div>
            <div className="grid__item grid__item--col-2">
              <div className="input-group input-group--type-date">
                <Input id="date" type="date" label="Дата" {...inputDateProps} />
                <Input id="timestart" type="time" label="Начало" {...inputTimeStartProps} />
                <div className="input-group__separator">—</div>
                <Input id="timeend" type="time" label="Конец" {...inputTimeEndProps} />
              </div>
            </div>
            <div className="grid__item grid__item--col-2">
              <InputDatalist id="users" label="Участники" {...inputDatalistProps} />
              <UsersList users={eventUsers} event={event} onButtonUserRemoveClick={onButtonUserRemoveClick} />
            </div>
            <div className="grid__item grid__item--col-2">
              <h6>{roomTitle}</h6>
              <div className="button-group button-group--width-full">
              {event && event.room ? (() => (
                <RoomItem {...roomItemProps} {...event.room} isRoomChecked={true} room={event.room} defaultChecked={true}/>
              ))() : isRecommendationShow ? recommendationRooms.map(room => (
                <RoomItem key={room.id} {...roomItemProps} {...room} isRoomChecked={false} room={room} />
              )) : ''}
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
