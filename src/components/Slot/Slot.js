import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';
import Tooltip from './../Tooltip/Tooltip';

class Slot extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const slotWidth = ((66 / 1035) * this.props.time / 60) * 100;
    const slotStyles = { width: `${slotWidth}%` };

    return (
      <div className={block('slot')} style={slotStyles}>
        <Button mods={this.props.mods} mix={elem('button')}>
          <div className={elem('button-text')}>+</div>
        </Button>
        <Tooltip mix={elem('tooltip')}>
          {this.props.children}
        </Tooltip>
      </div>
    );
  }
}

export default Slot;
