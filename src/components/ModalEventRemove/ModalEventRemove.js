import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import emoji1 from './../../images/emoji1.svg';

import Button from './../Button/Button';
import Modal from './../Modal/Modal';

class ModalEventRemove extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const {
      event,
      mods,
      onModalButtonCloseClick,
      removeEventMutate
    } = this.props;

    const modalProps = {
      ...this.props,
      mods: { center: true, ...mods }
    };
    const buttonProps = {
      mods: { type: 'secondary', size: 'md' },
      mix: 'grid__item'
    };
    const buttonCloseProps = {
      ...buttonProps,
      onClick: onModalButtonCloseClick
    };
    const buttonRemoveProps = {
      ...buttonProps,
      onClick: () => {
        removeEventMutate({ variables: { id: event.id } });
        onModalButtonCloseClick();
      }
    };

    return (
      <Modal className={block('modal')} {...modalProps}>
        <img className={elem('image')} src={emoji1} width="40" height="40" alt="Встреча будет удалена безвозвратно"/>
        <h3 className={elem('title')}>Встреча будет<br />удалена безвозвратно</h3>
        <div className={elem('footer', {}, 'grid grid--margin-true grid--center')}>
          <Button {...buttonCloseProps}>Отмена</Button>
          <Button to="/" {...buttonRemoveProps}>Удалить</Button>
        </div>
      </Modal>
    );
  }
}

export default ModalEventRemove;
