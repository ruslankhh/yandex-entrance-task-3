import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';
import EventItem from './../EventItem/EventItem';
import Tooltip from './../Tooltip/Tooltip';

class Slot extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const HOUR = 60 * 60 * 1000;
    const slotWidth = this.props.duration ? ((66 / 1035) * this.props.duration / HOUR) * 100 : '';
    const slotStyles = this.props.duration ? { width: `${slotWidth}%` } : {};
    const isLink = !(this.props.event || (this.props.mods && this.props.mods.type === 'secondary'));

    return (
      <div className={block('slot', { mix: 'room-item__slot' })} style={slotStyles}>
        {isLink ? (() => (
          <Button to="/event" mods={this.props.mods} mix={elem('button')}>
            <div className={elem('button-text')}>+</div>
          </Button>
        ))() : (() => (
          <Button mods={this.props.mods} mix={elem('button')} />
        ))()}
        {this.props.event ? (() => (
          <Tooltip mix={elem('tooltip')}>
            <EventItem {...this.props.event} />
          </Tooltip>
        ))() : ''}
      </div>
    );
  }
}

export default Slot;
