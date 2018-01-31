import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import emoji3 from './../../images/emoji3.svg';

import Button from './../Button/Button';
import Modal from './../Modal/Modal';

class ModalEventIsNotCorrect extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const { mods, onModalButtonCloseClick } = this.props;

    const modalProps = {
      ...this.props,
      mods: { center: true, ...mods }
    };
    const buttonProps = {
      mods: { type: 'primary', size: 'md' },
      mix: 'grid__item',
      onClick: onModalButtonCloseClick
    };

    return (
      <Modal className={block('modal')} {...modalProps}>
        <img className={elem('image')} src={emoji3} width="40" height="40" alt="Все поля должны быть заполнены правильно."/>
        <h3 className={elem('title')}>Все поля<br />должны быть заполнены правильно</h3>
        <div className={elem('footer', {}, 'grid grid--margin-true grid--center')}>
          <Button {...buttonProps}>Хорошо</Button>
        </div>
      </Modal>
    );
  }
}

export default ModalEventIsNotCorrect;
