import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import { createPluralTemplate } from '../../helpers/pluralHelper';

import UserItem from './../UserItem/UserItem';

class EventItem extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const plural = createPluralTemplate('ru');
    const dateStart = new Date(this.props.dateStart);
    const dateEnd = new Date(this.props.dateEnd);
    const dateStartString = dateStart
      .toLocaleString('ru', { month: 'long', day: 'numeric' });
    const timeStartString = dateStart
      .toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
    const timeEndString = dateEnd
      .toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
    const timeRangeString = `${timeStartString}-${timeEndString}`;
    const n1 = this.props.users.length - 1;
    const userContent = this.props.users.length > 1 ?
      plural`и ${n1} {участник, участника, участников}` : '';

    return (
      <div className={block('event-item')}>
        <div className={elem('title')}>{this.props.title}</div>
        <div className={elem('text')}>
          <span className={elem('date')}>{`${dateStartString}, `}</span>
          <span className={elem('time')}>{timeRangeString}</span>
          <span className={elem('text-separator')}>·</span>
          <span className={elem('room')}>{this.props.room.title}</span>
        </div>
        <UserItem
          mods={{ button: false, transparent: true }}
          content={userContent}
          {...this.props.users[0]}
        />
      </div>
    );
  }
}

export default EventItem;
