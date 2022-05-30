import React from 'react';

import { PolymorphicComponentProps, PolymorphicRef } from '@/types';

type ExternalLinkProps = PolymorphicComponentProps<'a'>;

type ExternalLinkComponent = (
  props: ExternalLinkProps,
  ref?: PolymorphicRef<'a'>
) => JSX.Element | null;

const ExternalLinkInner = (props: ExternalLinkProps, ref?: PolymorphicRef<'a'>) => {
  const { children, ...otherProps } = props;

  return (
    <a ref={ref} {...otherProps}>
      {children}
    </a>
  );
};
ExternalLinkInner.displayName = 'ExternalLink';

const ExternalLink: ExternalLinkComponent = React.forwardRef(ExternalLinkInner);

export type { ExternalLinkProps };
export { ExternalLink };
