import React, { Component } from 'react';

class InputDatalist extends Component {
  render() {
    const className = "input-datalist";
    const mods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${className}--${mod}`) : '';
    const mix = this.props.mix ? [].concat(this.props.mix) : '';
    const classNames = [className, ...mods, ...mix];

    const controlClassName = `${className}__control`;
    const controlMods = this.props.mods ? [].concat(this.props.mods)
      .map(mod => `${controlClassName}--${mod}`) : '';
    const controlClassNames = [controlClassName, ...controlMods];

    return (
      <div className={classNames.join(' ')}>
        <label className={`${className}__label`} htmlFor={this.props.id}>{this.props.label}</label>
        <div className={`${className}__container`}>
          <input
            id={this.props.id}
            name={this.props.id}
            className={controlClassNames.join(' ')}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            list={`${this.props.id}-list`}
          />
          <datalist id={`${this.props.id}-list`}>
            {this.props.options ? this.props.options.map(option => (
              <option key={option.id} label={option.label}>{option.value}</option>
            )) : ''}
          </datalist>
        </div>
      </div>
    );
  }
}

export default InputDatalist;
