import React, { Component } from 'react';
import Block from '../../helpers/BEMHelper';

import Button from '../Button/Button';
import Link from '../Link/Link';

class DatePicker extends Component {
  render() {
    const { block, elem } = new Block(this.props);

    return (
      <div className={block('datepicker')} id={this.props.id}>
        <Button mods={{ icon: 'arrow-left', size: 'xs', circle: true }} mix={elem('button-left')}/>
        <Link href="#" mix={elem('link')}>
          {this.props.children}
        </Link>
        <Button mods={{ icon: 'arrow-right', size: 'xs', circle: true }} mix={elem('button-right')}/>
      </div>
    );
  }
}

export default DatePicker;
