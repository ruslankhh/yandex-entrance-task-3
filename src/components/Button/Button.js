import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createBlock } from '../../helpers/BEMHelper';

class Button extends Component {
  render() {
    const { block, elem } = createBlock(this.props);

    return this.props.to ? (
      <Link
        className={block('button')}
        id={this.props.id}
        to={this.props.to}
        onClick={this.props.onClick}
      >
        <div className={elem('text')}>
          {this.props.children}
        </div>
      </Link>
    ) : (
      <button
        className={block('button')}
        id={this.props.id}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        <div className={elem('text')}>
          {this.props.children}
        </div>
      </button>
    );
  }
}

export default Button;
