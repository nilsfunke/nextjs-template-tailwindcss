import clsx from 'clsx';

import { ButtonSize, ButtonColor } from './types';

const getButtonSizeClass = (size: ButtonSize) => `btn-${size}`;
const getButtonColorClass = (color: ButtonColor) => `btn-${color}`;

const getIconButtonClasses = (size: ButtonSize, color: ButtonColor) => {
  let sizeClass = getButtonSizeClass(size);
  let colorsClass = getButtonColorClass(color);

  return clsx('btn btn-icon', sizeClass, colorsClass);
};

const getTextButtonClasses = (size: ButtonSize, color: ButtonColor) => {
  let sizeClass = getButtonSizeClass(size);
  let colorsClass = getButtonColorClass(color);

  return clsx('btn btn-text', sizeClass, colorsClass);
};

export { getIconButtonClasses, getTextButtonClasses };
