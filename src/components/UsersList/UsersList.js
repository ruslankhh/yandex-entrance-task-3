import React, { Component } from 'react';

import UserItem from './../UserItem/UserItem';

class UsersList extends Component {
  render() {
    const className = "users-list";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    return (
      <div className={classNames.join(' ')}>
        {this.props.users ? this.props.users.map(user => (
          <UserItem
            key={user.id}
            mix={`${className}__item`}
            id={user.id}
            name={user.login}
            image={user.avatarUrl}
          />
        )) : ''}
      </div>
    );
  }
}

export default UsersList;
