import type { AppProps } from 'next/app';

import { FramerMotionProvider } from '@/components/common';
import { PageLayout } from '@/components/layout';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FramerMotionProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </FramerMotionProvider>
  );
}

export default MyApp;
