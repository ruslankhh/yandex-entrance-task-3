import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { calcSlotsProps } from '../../helpers/calcSlotsProps';

import Slot from './../Slot/Slot';

class SlotsList extends Component {
  render() {
    const { block } = createBlock(this.props);
    const slotsProps = calcSlotsProps(this.props);

    return (
      <div className={block('slots-list', { mix: 'room-item__content' })}>
        {slotsProps.map((prop, i) => (
          <Slot
            key={i}
            onSlotButtonClick={this.props.onSlotButtonClick}
            {...prop}
          />
        ))}
      </div>
    );
  }
}

export default SlotsList;
