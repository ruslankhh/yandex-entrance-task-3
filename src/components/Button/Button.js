import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

class Button extends Component {
  render() {
    const { block, elem } = new Block(this.props);

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
