import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import DatePicker from '../DatePicker/DatePicker';
import ModalEventCreated from '../ModalEventCreated/ModalEventCreated';
import RoomsList from '../RoomsList/RoomsList';
import Timeline from '../Timeline/Timeline';

class EventDiagram extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <main className={block('body', null, 'event-diagram')} id={this.props.id}>
        <div className={elem('sidebar')}>
          <div className={elem('sidebar-header')}>
            <DatePicker
              date={this.props.date}
              onButtonLeftClick={this.props.onDatePickerButtonLeftClick}
              onButtonRightClick={this.props.onDatePickerButtonRightClick}
            />
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
        {this.props.currentEvent ? (() =>
          <ModalEventCreated mods={{ opened: false }} event={this.props.currentEvent}/>
        )() : ''}
      </main>
    );
  }
}

export default EventDiagram;
