import React from 'react';
import NextLink from 'next/link';
import { LinkProps as NextLinkProps } from 'next/link';

import { PolymorphicRef, PropsOf } from '@/types';

type LinkProps = Omit<PropsOf<'a'>, 'href' | 'target'> & Omit<NextLinkProps, 'passHref' | 'as'>;

type LinkComponent = (props: LinkProps, ref?: PolymorphicRef<'a'>) => JSX.Element | null;

const LinkInner = (props: LinkProps, ref?: PolymorphicRef<'a'>) => {
  const { href, prefetch, replace, scroll, shallow, locale, children, ...otherProps } = props;

  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      <a ref={ref} {...otherProps}>
        {children}
      </a>
    </NextLink>
  );
};
LinkInner.displayName = 'Link';

const Link: LinkComponent = React.forwardRef(LinkInner);

export type { LinkProps };
export { Link };
