import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import emoji2 from './../../images/emoji2.svg';

import Button from './../Button/Button';
import EventItem from './../EventItem/EventItem';
import Modal from './../Modal/Modal';

class ModalEventCreated extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const props = { ...this.props, mods: { center: true, ...this.props.mods } };

    return (
      <Modal className={block('modal')} {...props}>
        <img className={elem('image')} src={emoji2} width="40" height="40" alt="Встреча создана!"/>
        <h3 className={elem('title')}>Встреча создана!</h3>
        <EventItem mods={{ type: 'short' }} {...this.props.event} />
        <div className={elem('footer', {}, 'grid grid--margin-true grid--center')}>
          <Button mods={{ type: 'primary', size: 'md' }} mix="grid__item">Хорошо</Button>
        </div>
      </Modal>
    );
  }
}

export default ModalEventCreated;
