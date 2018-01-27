import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';

class Link extends Component {
  render() {
    const { block } = createBlock(this.props);

    return (
      <a className={block('link')} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
