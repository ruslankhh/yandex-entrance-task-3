import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

class Link extends Component {
  render() {
    const { block } = new Block(this.props);

    return (
      <a className={block('link')} href={this.props.href}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
