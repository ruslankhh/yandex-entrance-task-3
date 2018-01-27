import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class Button extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <button className={block('button')} id={this.props.id} type={this.props.type}>
        <div className={elem('text')}>
          {this.props.children}
        </div>
      </button>
    );
  }
}

export default Button;
