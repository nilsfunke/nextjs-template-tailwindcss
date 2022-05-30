import TagManager from 'react-gtm-module';

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

const initializeGtm = (): void => {
  if (!GTM_ID) return;

  TagManager.initialize({ gtmId: GTM_ID });
};

export { initializeGtm, GTM_ID };
