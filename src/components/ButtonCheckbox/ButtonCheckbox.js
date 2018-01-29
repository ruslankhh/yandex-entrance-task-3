import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class ButtonCheckbox extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('button-checkbox')}>
        <input
          className={elem('checkbox')}
          id={this.props.id}
          name={this.props.id}
          type="checkbox"
          defaultChecked={this.props.defaultChecked}
          hidden
        />
        <div className={elem('content')}>
          {this.props.children}
        </div>
        <label className={elem('button')} htmlFor={this.props.id}>
          <div className={elem('button-text')}></div>
        </label>
      </div>
    );
  }
}

export default ButtonCheckbox;
