import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class InputDatalist extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('input-datalist')}>
        <label className={elem('label')} htmlFor={this.props.id}>{this.props.label}</label>
        <div className={elem('container')}>
          <input
            id={this.props.id}
            name={this.props.id}
            className={elem('control', this.props)}
            type={this.props.type}
            placeholder={this.props.placeholder}
            defaultValue={this.props.defaultValue}
            list={`${this.props.id}-list`}
            onChange={this.props.onChange}
            onInput={this.props.onInput}
            onKeyPress={this.props.onKeyPress}
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
