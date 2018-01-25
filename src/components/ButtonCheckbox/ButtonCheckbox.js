import React, { Component } from 'react';

class ButtonCheckbox extends Component {
  render() {
    const className = "button-checkbox";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    return (
      <div className={classNames.join(' ')}>
        <input className={`${className}__checkbox`} id={this.props.id} name={this.props.id} type="checkbox" checked={this.props.checked} hidden />
        <div className={`${className}__content`}>
          {this.props.children}
        </div>
        <label className={`${className}__button`} htmlFor={this.props.id}>
          <div className={`${className}__button-text`}></div>
        </label>
      </div>
    );
  }
}

export default ButtonCheckbox;
