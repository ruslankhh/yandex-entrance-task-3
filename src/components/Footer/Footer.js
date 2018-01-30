import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Button from './../Button/Button';

class Footer extends Component {
  render() {
    const {
      event,
      onButtonCloseClick,
      createEventMutate,
      updateEventMutate,
      removeEventMutate,
      removeUserFromEventMutate,
      addUserToEventMutate,
      changeEventRoomMutate
    } = this.props;
    const isCorrect = event && event.isCorrect;
    const isCreated = event && event.isCreated;
    const onButtonSaveOrCreateClick = () => {
      if (isCorrect) {
        const { id, title, dateStart, dateEnd } = event;
        const input = { title, dateStart, dateEnd };
        const users = event.users ? event.users : [];
        const usersIds = users.map(user => user.id);
        const roomId = event.room.id;

        if (!isCreated) {
          // TODO: Add modal show.
          createEventMutate({ variables: { input, usersIds, roomId } });
        } else {
          const usersHash = users
            .reduce((acc, user) => ({ ...acc, [user.login]: user }), {});
          const originUsers = event.originUsers ? event.originUsers : [];
          const originUsersHash = originUsers
            .reduce((acc, user) => ({ ...acc, [user.login]: user }), {});
          const addUsers = users.filter(user => !originUsersHash[user.login]);
          const removeUsers = originUsers.filter(user => !usersHash[user.login]);

          updateEventMutate({ variables: { id, input } });
          addUsers.forEach(user =>
            addUserToEventMutate({ variables: { id, userId: user.id } })
          );
          removeUsers.forEach(user =>
            removeUserFromEventMutate({ variables: { id, userId: user.id } })
          );
          changeEventRoomMutate({ variables: { id, roomId } });
        }
      } else {
        // TODO: Add modal show.
        console.log('Event is not correct.');
      }
    };
    // TODO: Add modal show.
    const onButtonRemoveClick = () =>
      removeEventMutate({ variables: { id: event.id } });

    const props1 = {
      mods: { type: 'secondary', size: 'md' },
      onClick: onButtonCloseClick
    };
    const props2 = {
      mods: { type: 'secondary', size: 'md' },
      onClick: onButtonRemoveClick
    };
    const props3 = {
      mods: { type: 'secondary', size: 'md' },
      onClick: onButtonSaveOrCreateClick
    };
    const props4 = {
      mods: { type: 'primary', size: 'md' },
      onClick: onButtonSaveOrCreateClick
    };

    return (
      <Route exact path="/event" render={() =>
        event && event.isCreated ? (
          <footer className="footer">
            <Button to="/" {...props1}>Отмена</Button>
            <Button to="/" {...props2}>Удалить встречу</Button>
            <Button to={isCorrect ? '/' : null} {...props3}>Сохранить</Button>
          </footer>
        ) : (
          <footer className="footer">
            <Button to="/" {...props1}>Отмена</Button>
            <Button to={isCorrect ? '/' : null} {...props4}>Создать встречу</Button>
          </footer>
        )
      }/>
    );
  }
}

export default Footer;
