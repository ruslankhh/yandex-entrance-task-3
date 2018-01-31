import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { createPluralTemplate } from '../../helpers/pluralHelper';

import RoomItem from '../RoomItem/RoomItem';

class RoomsList extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const { date, event, events, onSlotButtonClick, rooms, floor } = this.props;
    const plural = createPluralTemplate('ru');
    const n1 = floor ? floor : '';
    const title = floor ? plural`${n1} {этаж}` : '';

    return (
      <div className={block('rooms-list')}>
        <div className={elem('title')}>{title}</div>
        <div className={elem('body')}>
          {rooms ? rooms.map((room, i) => {
            const roomEvents = events ? events
              .filter(event => event.room.id === room.id) : [];
            const roomProps = {
              date,
              event,
              events: roomEvents,
              mods: { content: true },
              onSlotButtonClick,
              room,
              ...room
            }

            return (
              <RoomItem key={i} mix={elem('item')} {...roomProps}  />
            );
          }) : ''}
        </div>
      </div>
    );
  }
}

export default RoomsList;
