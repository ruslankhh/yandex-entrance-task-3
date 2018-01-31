import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import DatePicker from '../DatePicker/DatePicker';
import RoomsList from '../RoomsList/RoomsList';
import Timeline from '../Timeline/Timeline';

class EventDiagram extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <main className={block('body', null, 'event-diagram')}>
        <div className={elem('sidebar')}>
          <div className={elem('sidebar-header')}>
            <DatePicker {...this.props} />
          </div>
          <div className={elem('sidebar-body')}>
            <RoomsList {...this.props} />
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
