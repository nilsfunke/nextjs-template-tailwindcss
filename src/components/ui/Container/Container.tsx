import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentProps, PolymorphicRef } from '@/types';

type ContainerProps = PolymorphicComponentProps<'div'>;

type ContainerComponent = (
  props: ContainerProps,
  ref?: PolymorphicRef<'div'>
) => JSX.Element | null;

const ContainerInner = (props: ContainerProps, ref?: PolymorphicRef<'div'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div ref={ref} className={clsx('container h-full px-32', className)} {...otherProps}>
      {children}
    </div>
  );
};
ContainerInner.displayName = 'Container';

const Container: ContainerComponent = React.forwardRef(ContainerInner);

export type { ContainerProps };
export { Container };
