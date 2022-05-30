import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types';

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => JSX.Element | null;

const TextInner = <C extends React.ElementType>(props: TextProps<C>, ref?: PolymorphicRef<C>) => {
  const { as, children, className, ...otherProps } = props;

  const Component = as || 'span';

  return (
    <Component
      ref={ref}
      className={clsx('font-primary font-normal text-gray-11', className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
TextInner['displayName'] = 'Text';

const Text: TextComponent = React.forwardRef(TextInner);

export type { TextProps };
export { Text };
