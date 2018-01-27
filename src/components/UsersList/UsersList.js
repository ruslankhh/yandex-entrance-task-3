import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

import UserItem from './../UserItem/UserItem';

class UsersList extends Component {
  render() {
    const { block, elem } = new Block(this.props);

    return (
      <div className={block('users-list')}>
        {this.props.users ? this.props.users.map(user => (
          <UserItem
            key={user.id}
            mix={elem('item')}
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
