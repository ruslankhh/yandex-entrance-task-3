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

    return (
      <div className={block('slot', { mix: 'room-item__slot' })} style={slotStyles}>
        <Button mods={this.props.mods} mix={elem('button')}>
          <div className={elem('button-text')}>+</div>
        </Button>
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
