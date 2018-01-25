import React, { Component } from 'react';

class RoomItem extends Component {
  render() {
    const className = "room-item";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    return (
      <div className={classNames.join(' ')} id={`room-${this.props.id}`} >
        <div className={`${className}__body`}>
          <div className={`${className}__title`}>{this.props.title}</div>
          <div className={`${className}__text`}>
            <span className={`${className}__capacity`}>{this.props.capacity}</span>
            <span className={`${className}__time`}>{this.props.time}</span>
            <span className={`${className}__room`}>{this.props.room}</span>
            <span className={`${className}__text-separator`}> · </span>
            <span className={`${className}__floor`}>{this.props.floor}</span>
          </div>
        </div>
        <div className={`${className}__content`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default RoomItem;
