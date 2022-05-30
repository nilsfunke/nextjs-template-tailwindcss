import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types';

import { ButtonProps } from './types';
import { getIconButtonClasses } from './getButtonClasses';

type Props = {
  icon: React.ReactNode;
} & ButtonProps;

type IconButtonProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>;

type IconButtonComponent = <C extends React.ElementType = 'button'>(
  props: IconButtonProps<C>
) => JSX.Element | null;

const IconButtonInner = <C extends React.ElementType>(
  props: IconButtonProps<C>,
  ref?: PolymorphicRef<C>
) => {
  const { as, color, size, icon, className, ...otherProps } = props;

  const Component = as || 'button';
  const classNames = getIconButtonClasses(size, color);

  return (
    <Component ref={ref} className={clsx(classNames, className)} {...otherProps}>
      {icon}
    </Component>
  );
};
IconButtonInner.displayName = 'IconButton';

const IconButton: IconButtonComponent = React.forwardRef(IconButtonInner);

export type { IconButtonProps };
export { IconButton };
