import React, { useState } from 'react';

import { initializeGtm } from '@/lib/tracking';
import { setCookiesAcceptedCookie } from '@/utils';

const CookieBanner: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const cookieButtonHandler = (value: string) => {
    setCookiesAcceptedCookie(value);

    if (value === 'accepted') {
      initializeGtm();
    }

    setShowCookieBanner(false);
  };

  const cookieBannerVariants = {
    hidden: { y: '100%', transitionEnd: { display: 'none' } },
    visible: { display: 'block', y: 0 },
  };

  return (
    <div>CookieBanner</div>
    // <m.div
    //   className={'fixed bottom-0 inset-x-0 z-cookie-banner bg-bg-primary shadow-divider-t'}
    //   variants={cookieBannerVariants}
    //   initial={'hidden'}
    //   animate={showCookieBanner ? 'visible' : 'hidden'}
    //   transition={{ ease: 'linear', duration: 0.2 }}
    // >
    //   <Container className={'text-center py-32'}>
    //     <Grid>
    //       <div className={'col-span-full lg:col-start-3 lg:col-end-11 flex flex-col items-center'}>
    //         <Heading tag={'h3'} size={16}>
    //           WIR VERWENDEN COOKIES 🍪
    //         </Heading>
    //
    //         <Spacer className={'h-12'} />
    //
    //         <Text tag={'p'} size={12} className={'text-ui-secondary'}>
    //           Wir nutzen Cookies, um Inhalte zu personalisieren, bestimmte Funktionen für Social
    //           Media bereitzustellen und Zugriffe auf unsere Seite auszuwerten. Diese Daten werden an
    //           Partner wie Google oder Meta für Werbe- und Analysemaßnahmen weitergegeben. Unsere
    //           Partner führen diesen Daten möglicherweise zusammen. Mit deiner Bestätigung erklärst
    //           du dich damit einverstanden. Deine Zustimming wird mithilfe eines Cookies gespeichert.
    //           Solltest du dem nicht zustimmen, wird ein technisch notwedniger Cookie gesetzt, der
    //           deine Entscheidung speichert.
    //         </Text>
    //
    //         <Spacer className={'h-24'} />
    //
    //         <div className={clsx('flex flex-col items-center justify-center gap-8', 'sm:flex-row')}>
    //           <TextButton
    //             size={'xs'}
    //             variant={'primary'}
    //             onClick={() => cookieButtonHandler('accepted')}
    //           >
    //             Cookies akzeptieren
    //           </TextButton>
    //
    //           <TextButton
    //             size={'xs'}
    //             variant={'secondary'}
    //             onClick={() => cookieButtonHandler('denied')}
    //           >
    //             Cookies ablehnen
    //           </TextButton>
    //         </div>
    //       </div>
    //     </Grid>
    //   </Container>
    // </m.div>
  );
};

export { CookieBanner };
