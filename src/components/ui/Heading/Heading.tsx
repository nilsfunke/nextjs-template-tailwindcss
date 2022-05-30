import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types';

type HeadingProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

type HeadingComponent = <C extends React.ElementType = 'span'>(
  props: HeadingProps<C>
) => JSX.Element | null;

const HeadingInner = <C extends React.ElementType>(
  props: HeadingProps<C>,
  ref?: PolymorphicRef<C>
) => {
  const { as, children, className, ...otherProps } = props;

  const Component = as || 'span';

  return (
    <Component
      ref={ref}
      className={clsx('font-primary font-bold text-gray-12', className)}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
HeadingInner['displayName'] = 'Heading';

const Heading: HeadingComponent = React.forwardRef(HeadingInner);

export type { HeadingProps };
export { Heading };
