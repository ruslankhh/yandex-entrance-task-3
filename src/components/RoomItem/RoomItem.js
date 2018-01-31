import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { createPluralTemplate } from '../../helpers/pluralHelper';

import SlotsList from './../SlotsList/SlotsList';
import ButtonCheckbox from './../ButtonCheckbox/ButtonCheckbox';

class RoomItem extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const {
      capacity,
      date,
      event,
      events,
      floor,
      onButtonCheckboxClick,
      onSlotButtonClick,
      room,
      isRoomChecked,
      mods,
      time,
      title
    } = this.props;
    const plural = createPluralTemplate('ru');
    const capacityText = capacity ? plural`${capacity} {человек, человека, человек}` : '';
    const floorText = floor ? plural`${floor} {этаж}`: '';
    const onChange = () => {
      onButtonCheckboxClick({ ...event, room: isRoomChecked ? null : room })
    };

    const slotsListProps = { date, events, onSlotButtonClick, room };

    return mods && mods.type === 'short' ? (
      <div className={block('room-item')}>
        <ButtonCheckbox onChange={onChange} {...this.props}>
          <div className={elem('body')}>
            <div className={elem('text')}>
              <span className={elem('time')}>{time}</span>
              <span className={elem('room')}>{title}</span>
              <span className={elem('text-separator')}> · </span>
              <span className={elem('floor')}>{floorText}</span>
            </div>
          </div>
        </ButtonCheckbox>
      </div>
    ) : (
      <div className={block('room-item')}>
        <div className={elem('body')}>
          <div className={elem('title')}>{title}</div>
          <div className={elem('text')}>
            <span className={elem('capacity')}>{capacityText}</span>
          </div>
        </div>
        <SlotsList {...slotsListProps} />
      </div>
    );
  }
}

export default RoomItem;
