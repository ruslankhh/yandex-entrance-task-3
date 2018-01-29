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
          {this.props.rooms ? this.props.rooms.map((room, i) => {
            const roomEvents = this.props.events ? this.props.events
              .filter(event => event.room.id === room.id) : [];

            return (
              <RoomItem
                key={i}
                mods={{ content: true }}
                mix={elem('item')}
                date={this.props.date}
                onSlotButtonClick={this.props.onSlotButtonClick}
                events={roomEvents}
                room={room}
                {...room}
              />
            );
          }) : ''}
        </div>
      </div>
    );
  }
}

export default RoomsList;
