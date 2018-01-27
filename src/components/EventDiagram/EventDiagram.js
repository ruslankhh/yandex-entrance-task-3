import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import DatePicker from '../DatePicker/DatePicker';
import RoomsList from '../RoomsList/RoomsList';
import Timeline from '../Timeline/Timeline';

class EventDiagram extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <main className={block('body', null, 'event-diagram')} id={this.props.id}>
        <div className={elem('sidebar')}>
          <div className={elem('sidebar-header')}>
            <DatePicker>14 дек · Сегодня</DatePicker>
          </div>
          <div className={elem('sidebar-body')}>
            <RoomsList rooms={this.props.data.rooms} />
          </div>
        </div>
        <div className={elem('main')}>
          <div className={elem('main-header')}>
            <Timeline mods={{ disabled: 11 }} time={11 * 60 + 5} text="11:05" />
          </div>
          <div className={elem('main-body')}></div>
        </div>
      </main>
    );
  }
}

export default EventDiagram;
