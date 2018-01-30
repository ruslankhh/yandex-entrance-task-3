import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { createPluralTemplate } from '../../helpers/pluralHelper';

import SlotsList from './../SlotsList/SlotsList';
import ButtonCheckbox from './../ButtonCheckbox/ButtonCheckbox';

class RoomItem extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const { event, onButtonCheckboxClick, room, isRoomChecked } = this.props;
    const plural = createPluralTemplate('ru');
    const n1 = this.props.capacity;
    const capacityText = plural`${n1} {человек, человека, человек}`;
    const n2 = this.props.floor;
    const floorText = plural`${n2} {этаж}`;
    const onChange = () => {
      onButtonCheckboxClick({ ...event, room: isRoomChecked ? null : room })
    };

    return this.props.mods && this.props.mods.type === 'short' ? (
      <div className={block('room-item')}>
        <ButtonCheckbox {...this.props} onChange={onChange}>
          <div className={elem('body')}>
            <div className={elem('text')}>
              <span className={elem('time')}>{this.props.time}</span>
              <span className={elem('room')}>{this.props.title}</span>
              <span className={elem('text-separator')}> · </span>
              <span className={elem('floor')}>{floorText}</span>
            </div>
          </div>
        </ButtonCheckbox>
      </div>
    ) : (
      <div className={block('room-item')}>
        <div className={elem('body')}>
          <div className={elem('title')}>{this.props.title}</div>
          <div className={elem('text')}>
            <span className={elem('capacity')}>{capacityText}</span>
          </div>
        </div>
        <SlotsList
          date={this.props.date}
          events={this.props.events}
          onSlotButtonClick={this.props.onSlotButtonClick}
          room={this.props.room}
        />
      </div>
    );
  }
}

export default RoomItem;
