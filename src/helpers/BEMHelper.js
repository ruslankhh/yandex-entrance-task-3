// BEMHelper

class Block {
  constructor(props) {
    this.props = props;

    this.block = this.block.bind(this);
    this.elem = this.elem.bind(this);
  }

  static compiler(className, { mods = {}, mix = [] } = {}, classes) {
    const classNames = [
      ...[].concat(mix),
      className,
      ...Object.keys(mods)
        .map(key => {
          if (typeof mods[key] === 'boolean' && mods[key]) {
            // TODO: Update after fix styles
            return `${className}--${key} ${className}--${key}-${mods[key]}`;
          } else {
            return `${className}--${key}-${mods[key]}`;
          }
        }),
      ...[].concat(classes)
    ];

    return classNames.filter(str => !!str).join(' ');
  }

  block(blockName, props, classes) {
    this.props = { ...this.props, ...props, blockName };

    return Block.compiler(blockName, this.props, classes);
  }

  elem(elemName, props, classes) {
    const className = `${this.props.blockName}__${elemName}`;

    return Block.compiler(className, props, classes);
  }
};

export const createBlock = (props) => {
  return new Block(props);
};

export default Block;
