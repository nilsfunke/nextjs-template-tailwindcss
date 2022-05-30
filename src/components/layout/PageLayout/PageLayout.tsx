import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { getCookiesAcceptedCookie } from '@/utils';

import { Header } from '../Header';
import { Footer } from '../Footer';

type CookiesState = 'accepted' | 'denied' | 'notset' | undefined;

const CookieBanner = dynamic<any>(() => import('../CookieBanner').then((mod) => mod.CookieBanner), {
  ssr: false,
});

const PageLayout: React.FC = ({ children }) => {
  const [cookiesState, setCookiesState] = useState<CookiesState>(undefined);

  useEffect(() => {
    const cookiesAcceptedCookie = getCookiesAcceptedCookie();

    if (cookiesAcceptedCookie == null) {
      setCookiesState('notset');
    } else if (cookiesAcceptedCookie === 'accepted') {
      setCookiesState('accepted');
    } else {
      setCookiesState('denied');
    }
  }, []);

  return (
    <>
      {/*<Header />*/}

      <main>{children}</main>

      {/*<Footer />*/}

      {cookiesState === 'notset' && <CookieBanner />}
    </>
  );
};

export { PageLayout };
