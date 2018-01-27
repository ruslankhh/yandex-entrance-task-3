import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

class Timeline extends Component {
  render() {
    const { block, elem } = new Block(this.props);
    const indicatorPosition = {
      left: ((66 / 1122) * (this.props.time - 7 * 60) / 60) * 100
    }
    const inpdicatorStyles = { left: `${indicatorPosition.left}%` };
    const items = ['8:00', ...Array.from({ length: 16 }, (v, i) => 9 + i)]

    return (
      <div className={block('timeline')}>
        <div className={elem('body')}>
          {items.map(value => (
            <div className={elem('item')}>
              <div className={elem('item-text')}>{value}</div>
            </div>
          ))}
        </div>
        <div className={elem('indicator')} style={inpdicatorStyles}>
          <div className={elem('indicator-text')}>{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Timeline;
