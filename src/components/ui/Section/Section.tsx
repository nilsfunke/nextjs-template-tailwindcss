import React from 'react';
import clsx from 'clsx';

import { PolymorphicComponentProps, PolymorphicRef } from '@/types';

type SectionProps = PolymorphicComponentProps<'section'>;

type SectionComponent = (
  props: SectionProps,
  ref?: PolymorphicRef<'section'>
) => JSX.Element | null;

const SectionInner = (props: SectionProps, ref?: PolymorphicRef<'section'>) => {
  const { className, children, ...otherProps } = props;

  return (
    <section ref={ref} className={clsx('py-96', 'lg:py-112', className)} {...otherProps}>
      {children}
    </section>
  );
};
SectionInner.displayName = 'Section';

const Section: SectionComponent = React.forwardRef(SectionInner);

export type { SectionProps };
export { Section };
