import React, { Component } from 'react';

class Button extends Component {
  render() {
    const className = "button";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    return (
      <button className={classNames.join(' ')} id={this.props.id} type={this.props.type}>
        <div className={`${className}__text`}>
          {this.props.children}
        </div>
      </button>
    );
  }
}

export default Button;
