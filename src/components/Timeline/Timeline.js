import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class Timeline extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.props.setDateNow(new Date());
  }

  render() {
    const { block, elem } = createBlock(this.props);
    const { dateNow } = this.props;
    const date = new Date(this.props.date);
    const now = new Date(dateNow);
    const isToday = now.toDateString() === date.toDateString();
    const time = now.getHours() * 60 + now.getMinutes();
    const indicatorPosition = { left: ((66 / 1122) * (time - 7 * 60) / 60) * 100 };
    const indicatorStyles = { left: `${indicatorPosition.left}%` };
    const timeString = now.toLocaleTimeString('ru').slice(0, -3);
    const items = Array.from({ length: 17 }, (v, i) => 7 + i + 1);


    return (
      <div className={block('timeline')}>
        <div className={elem('body')}>
          {items.map((value, i) => (
            <div key={i} className={elem('item')}>
              <div className={elem('item-text')}>{i ? value : `${value}:00`}</div>
            </div>
          ))}
        </div>
        {isToday ? (() => (
          <div className={elem('indicator')} style={indicatorStyles}>
            <div className={elem('indicator-text')}>{timeString}</div>
          </div>
        ))() : ''}
      </div>
    );
  }
}

export default Timeline;
