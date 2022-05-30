import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types';

import { ButtonProps } from './types';
import { getTextButtonClasses } from './getButtonClasses';

type Props = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonProps;

type TextButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type TextButtonComponent = <C extends React.ElementType = 'button'>(
  props: TextButtonProps<C>
) => JSX.Element | null;

const TextButtonInner = <C extends React.ElementType>(
  props: TextButtonProps<C>,
  ref?: PolymorphicRef<C>
) => {
  const { as, color, size, children, startIcon, endIcon, className, ...otherProps } = props;

  const Component = as || 'button';
  const classNames = getTextButtonClasses(size, color);

  return (
    <Component ref={ref} className={clsx(classNames, className)} {...otherProps}>
      {startIcon}
      {children}
      {endIcon}
    </Component>
  );
};
TextButtonInner.displayName = 'TextButton';

const TextButton: TextButtonComponent = React.forwardRef(TextButtonInner);

export type { TextButtonProps };
export { TextButton };
