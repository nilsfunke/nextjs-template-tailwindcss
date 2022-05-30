import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentProps, PolymorphicRef } from '@/types';

type GridProps = PolymorphicComponentProps<'div'>;

type GridComponent = (props: GridProps, ref?: PolymorphicRef<'div'>) => JSX.Element | null;

const GridInner = (props: GridProps, ref?: PolymorphicRef<'div'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      ref={ref}
      className={clsx(
        'grid grid-cols-4 gap-24',
        'md:grid-cols-8',
        'lg:grid-cols-12',
        className ?? null
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
GridInner.displayName = 'Grid';

const Grid: GridComponent = React.forwardRef(GridInner);

export type { GridProps };
export { Grid };
