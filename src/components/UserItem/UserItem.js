import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';

class UserItem extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const { event, id, onButtonUserRemoveClick } = this.props;
    const imageStyles = { backgroundImage: `url(${this.props.avatarUrl})` };
    const onClick = () => {
      const users = event.users.filter(user => user.id !== id);
      onButtonUserRemoveClick({ ...event, users });
    }

    return (
      <div className={block('user-item')}>
        <div className={elem('image')} style={imageStyles}></div>
        <div className={elem('name')}>{this.props.login}</div>
        <Button
          mods={{ ...this.props.mods, icon: 'close', size: 'xs', circle: true, transparent: true }}
          mix={elem('button')}
          onClick={onClick}
        />
        <div className={elem('content')}>{this.props.content}</div>
      </div>
    );
  }
}

export default UserItem;
