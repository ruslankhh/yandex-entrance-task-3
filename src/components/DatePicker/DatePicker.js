import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from '../Button/Button';

class DatePicker extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const {
      date,
      onDatePickerButtonLeftClick,
      onDatePickerButtonRightClick
    } = this.props;
    const today = new Date();
    const currentDate = new Date(date);
    const isToday = today.toDateString() === currentDate.toDateString();
    const dateString = isToday ?
      currentDate.toLocaleString('ru', { month: 'short', day: 'numeric' })
        .slice(0, -1) + ' · Сегодня' :
      currentDate.toLocaleString('ru', { month: 'long', day: 'numeric' });

    return (
      <div className={block('datepicker')}>
        <Button
          mods={{ icon: 'arrow-left', size: 'xs', circle: true }}
          mix={elem('button-left')}
          onClick={onDatePickerButtonLeftClick}
        />
        <div className={elem('link', {}, 'link')}>
          {dateString}
        </div>
        <Button
          mods={{ icon: 'arrow-right', size: 'xs', circle: true }}
          mix={elem('button-right')}
          onClick={onDatePickerButtonRightClick}
        />
      </div>
    );
  }
}

export default DatePicker;
