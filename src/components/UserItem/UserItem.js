import React, { Component } from 'react';

import Button from './../Button/Button';

class UserItem extends Component {
  render() {
    const className = "user-item";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    return (
      <div className={classNames.join(' ')} id={`user-${this.props.id}`} >
        <div className={`${className}__image`} style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <div className={`${className}__name`}>{this.props.name}</div>
        <Button
          mods={['icon-close', 'size-xs', 'circle', 'transparent']}
          mix={`${className}__button`}
        />
      </div>
    );
  }
}

export default UserItem;
