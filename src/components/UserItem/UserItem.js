import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

import Button from './../Button/Button';

class UserItem extends Component {
  render() {
    const { block, elem } = new Block(this.props);
    const imageStyles = { backgroundImage: `url(${this.props.image})` };

    return (
      <div className={block('user-item')} id={`user-${this.props.id}`} >
        <div className={elem('image')} style={imageStyles}></div>
        <div className={elem('name')}>{this.props.name}</div>
        <Button
          mods={{ icon: 'close', size: 'xs', circle: true, transparent: true }}
          mix={elem('button')}
        />
      </div>
    );
  }
}

export default UserItem;
