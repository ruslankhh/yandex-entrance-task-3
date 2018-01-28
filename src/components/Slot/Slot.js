import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';
import EventItem from './../EventItem/EventItem';
import Tooltip from './../Tooltip/Tooltip';

class Slot extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const slotWidth = ((66 / 1035) * this.props.time / 60) * 100;
    const slotStyles = { width: `${slotWidth}%` };
    const mods = { type: this.props.event ? 'secondary' : 'primary', ...this.props.mods };
    const isLink = this.props.event || (this.props.mods && this.props.mods.type === 'secondary');

    return (
      <div className={block('slot', { mods, mix: 'room-item__slot' })} style={slotStyles}>
        {isLink ? (() => (
          <Button mods={this.props.mods} mix={elem('button')} />
        ))() : (() => (
          <Button to="/event" mods={this.props.mods} mix={elem('button')}>
            <div className={elem('button-text')}>+</div>
          </Button>
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
