import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

import Button from '../Button/Button';

class DatePicker extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const today = new Date();
    const date = new Date(this.props.date);
    const isToday = today.toDateString() === date.toDateString();
    const dateString = isToday ?
      date.toLocaleString('ru', { month: 'short', day: 'numeric' })
        .slice(0, -1) + ' · Сегодня' :
      date.toLocaleString('ru', { month: 'long', day: 'numeric' });

    return (
      <div className={block('datepicker')} id={this.props.id}>
        <Button
          mods={{ icon: 'arrow-left', size: 'xs', circle: true }}
          mix={elem('button-left')}
          onClick={this.props.onButtonLeftClick}
        />
        <div className={elem('link', {}, 'link')}>
          {dateString}
        </div>
        <Button
          mods={{ icon: 'arrow-right', size: 'xs', circle: true }}
          mix={elem('button-right')}
          onClick={this.props.onButtonRightClick}
        />
      </div>
    );
  }
}

export default DatePicker;
