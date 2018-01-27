import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Slot from './../Slot/Slot';

class SlotsList extends Component {
  render() {
    const { block } = createBlock(this.props);
    const items = Array.from({ length: 17 }, (v, i) => 7 + i);

    return (
      <div className={block('slots-list', { mix: 'room-item__content' })}>
        {items.map((value, i) => {
          if (i === 0 || i === items.length - 1) {
            return <Slot key={i} />;
          }

          return <Slot key={i} mods={{ type: 'secondary' }} time="60" event={this.props.events[0]} />;
        })}
      </div>
    );
  }
}

export default SlotsList;
