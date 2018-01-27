import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { createPluralTemplate } from '../../helpers/pluralHelper';

class RoomItem extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const plural = createPluralTemplate('ru');
    const n1 = this.props.capacity;
    const capacityText = plural`${n1} {человек, человека, человек}`;

    return (
      <div className={block('room-item')} id={`room-${this.props.id}`} >
        <div className={elem('body')}>
          <div className={elem('title')}>{this.props.title}</div>
          <div className={elem('text')}>
            <span className={elem('capacity')}>{capacityText}</span>
            <span className={elem('time')}>{this.props.time}</span>
            <span className={elem('room')}>{this.props.room}</span>
            <span className={elem('text-separator')}> · </span>
            <span className={elem('floor')}>{this.props.floor}</span>
          </div>
        </div>
        <div className={elem('content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default RoomItem;
