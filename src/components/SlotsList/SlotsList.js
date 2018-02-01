import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Slot from './../Slot/Slot';

class SlotsList extends Component {
  render() {
    const { block } = createBlock(this.props);
    const { slots, onSlotButtonClick } = this.props;

    const slotProps = {
      onSlotButtonClick
    };

    return (
      <div className={block('slots-list', { mix: 'room-item__content' })}>
        {slots.map((slot, i) => (
          <Slot key={i} {...slot} {...slotProps} />
        ))}
      </div>
    );
  }
}

export default SlotsList;
