import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import RoomItem from '../RoomItem/RoomItem';

class RoomsList extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('rooms-list')}>
        <div className={elem('title')}>{this.props.title}</div>
        <div className={elem('body')}>
          {this.props.rooms ? this.props.rooms.map(room => (
            <RoomItem
              key={room.id}
              mods={{ content: true }}
              mix={elem('item')}
              id={room.id}
              title={room.title}
              capacity={room.capacity}
            />
          )) : ''}
        </div>
      </div>
    );
  }
}

export default RoomsList;
