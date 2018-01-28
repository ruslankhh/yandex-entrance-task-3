import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import DatePicker from '../DatePicker/DatePicker';
import ModalEventCreated from '../ModalEventCreated/ModalEventCreated';
import RoomsList from '../RoomsList/RoomsList';
import Timeline from '../Timeline/Timeline';

class EventDiagram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      dateStep: 24 * 60 * 60 * 1000
    };

    this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  prevDate() {
    const date = new Date(this.state.date.getTime() - this.state.dateStep);
    this.setState({ date });
  }

  nextDate() {
    const date = new Date(this.state.date.getTime() + this.state.dateStep);
    this.setState({ date });
  }

  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <main className={block('body', null, 'event-diagram')} id={this.props.id}>
        <div className={elem('sidebar')}>
          <div className={elem('sidebar-header')}>
            <DatePicker
              date={this.state.date}
              prevDate={this.prevDate}
              nextDate={this.nextDate}
            />
          </div>
          <div className={elem('sidebar-body')}>
            <RoomsList rooms={this.props.data.rooms} events={this.props.data.events}/>
          </div>
        </div>
        <div className={elem('main')}>
          <div className={elem('main-header')}>
            <Timeline
              mods={{ disabled: 11 }}
              date={this.state.date}
              time={11 * 60 + 5}
              text="11:05"
            />
          </div>
          <div className={elem('main-body')}></div>
        </div>
        <ModalEventCreated mods={{ opened: false }} event={this.props.data.events[0]}/>
      </main>
    );
  }
}

export default EventDiagram;
