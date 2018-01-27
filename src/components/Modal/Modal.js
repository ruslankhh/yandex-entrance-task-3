import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class Modal extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return (
      <div className={block('modal')} id={this.props.id}>
        <div className={elem('backdrop')}></div>
        <div className={elem('body')}>
          <div className={elem('content')}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
