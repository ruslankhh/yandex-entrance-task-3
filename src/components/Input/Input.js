import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

class Input extends Component {
  render() {
    const { block, elem } = new Block(this.props);

    return (
      <div className={block('input')}>
        <label className={elem('label')} htmlFor={this.props.id}>{this.props.label}</label>
        <div className={elem('container')}>
          <input
            id={this.props.id}
            name={this.props.id}
            className={elem('control', this.props)}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

export default Input;
