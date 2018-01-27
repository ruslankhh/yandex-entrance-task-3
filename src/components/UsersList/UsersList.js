import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import UserItem from './../UserItem/UserItem';

class UsersList extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('users-list')}>
        {this.props.users ? this.props.users.map(user => (
          <UserItem key={user.id} mix={elem('item')} {...user} />
        )) : ''}
      </div>
    );
  }
}

export default UsersList;
