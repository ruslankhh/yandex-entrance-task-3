import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';
import { roomCapacityTemplate } from '../../helpers/stringHelper';

class RoomItem extends Component {
  render() {
    const { block, elem } = new Block(this.props);
    const capacityText = roomCapacityTemplate`${this.props.capacity}`;

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
