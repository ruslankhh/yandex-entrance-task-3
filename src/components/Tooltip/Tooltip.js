import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from './../Button/Button';

class Tooltip extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('tooltip')}>
        <div className={elem('body')}>
          <Button
            to="/event"
            mods={{ icon: 'edit', size: 'xs', circle: true }}
            mix={elem('button')}
            onClick={this.props.onSlotButtonClick}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Tooltip;
