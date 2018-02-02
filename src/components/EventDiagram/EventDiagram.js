import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import DatePicker from '../DatePicker/DatePicker';
import RoomsList from '../RoomsList/RoomsList';
import Timeline from '../Timeline/Timeline';

class EventDiagram extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const { events, date, dateNow, onSlotButtonClick, rooms } = this.props;
    const floorsHash = rooms ? rooms.reduce((acc, room) => {
      const floorRooms = acc[room.floor] ? acc[room.floor] : [];
      return {
        ...acc,
        [room.floor]: [...floorRooms, room]
      };
    }, {}) : {};
    const floors = Object.keys(floorsHash).map(key => ({
      floor: key,
      rooms: floorsHash[key]
    }));

    const roomsListProps = { events, date, dateNow, onSlotButtonClick };

    return (
      <main className={block('body', null, 'event-diagram')}>
        <div className={elem('sidebar')}>
          <div className={elem('sidebar-header')}>
            <DatePicker {...this.props} />
          </div>
          <div className={elem('sidebar-body')}>
            {floors.map((floor, i) =>
              <RoomsList key={i} {...floor} {...roomsListProps} />
            )}
          </div>
        </div>
        <div className={elem('main')}>
          <div className={elem('main-header')}>
            <Timeline {...this.props} />
          </div>
          <div className={elem('main-body')}></div>
        </div>
      </main>
    );
  }
}

export default EventDiagram;
