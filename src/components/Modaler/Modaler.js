import React, { Component } from 'react';

import ModalEventIsNotCorrect from './../ModalEventIsNotCorrect/ModalEventIsNotCorrect';
import ModalEventCreated from './../ModalEventCreated/ModalEventCreated';
import ModalEventRemove from './../ModalEventRemove/ModalEventRemove';

class Modaler extends Component {
  render() {
    const {
      modal,
      onModalButtonCloseClick,
      onModalButtonRemoveClick,
      removeEventMutate,
      clearEvent
    } = this.props;

    const modalEventCreatedProps = {
      ...modal,
      mods: { opened: modal && modal.type === 'eventCreated' },
      onModalButtonCloseClick,
      clearEvent
    };
    const modalEventRemoveProps = {
      ...modal,
      mods: { opened: modal && modal.type === 'eventRemove' },
      onModalButtonCloseClick,
      onModalButtonRemoveClick,
      removeEventMutate
    };
    const modalEventIsNotCorrectProps = {
      ...modal,
      mods: { opened: modal && modal.type === 'eventIsNotCorrect' },
      onModalButtonCloseClick
    };

    return (
      <div className="modaler">
        <ModalEventIsNotCorrect {...modalEventIsNotCorrectProps} />
        <ModalEventCreated {...modalEventCreatedProps} />
        <ModalEventRemove {...modalEventRemoveProps} />
      </div>
    );
  }
}

export default Modaler;
