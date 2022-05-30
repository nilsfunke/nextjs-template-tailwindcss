import React from 'react';
import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
};

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  const pageTitle = title ? `NextJS Template - ${title}` : 'NextJS Template';
  const pageDescription = description ?? 'This is an awesome NextJS template';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={pageDescription} />

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Open Graph */}
      <meta property={'og:title'} content={'NextJS Template'} />
      <meta property={'og:description'} content={pageDescription} />
      {/*<meta property={'og:url'} content={'https://abifestival.de/'} />*/}
      {/*<meta property={'og:image'} content={'/images/og-image.png'} />*/}

      {/*<link rel="icon" href={'/images/favicon.svg'} />*/}
    </Head>
  );
};

export { Seo };
