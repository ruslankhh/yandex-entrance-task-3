import React, { Component } from 'react';
import { createBlock } from '../../helpers/BEMHelper';
import emoji1 from './../../images/emoji1.svg';

import Button from './../Button/Button';
import Modal from './../Modal/Modal';

class ModalEventRemove extends Component {
  render() {
    const { block, elem } = createBlock(this.props);
    const props = { ...this.props, mods: { center: true, ...this.props.mods } };

    return (
      <Modal className={block('modal')} {...props}>
        <img className={elem('image')} src={emoji1} width="40" height="40" alt="Встреча будет удалена безвозвратно"/>
        <h3 className={elem('title')}>Встреча будет<br />удалена безвозвратно</h3>
        <div className={elem('footer', {}, 'grid grid--margin-true grid--center')}>
          <Button mods={{ type: 'secondary', size: 'md' }} mix="grid__item">Отмена</Button>
          <Button mods={{ type: 'secondary', size: 'md' }} mix="grid__item">Удалить</Button>
        </div>
      </Modal>
    );
  }
}

export default ModalEventRemove;
