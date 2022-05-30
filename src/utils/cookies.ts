const COOKIES_ACCEPTED = 'cookies_accepted';

const setCookiesAcceptedCookie = (value: string) => {
  setCookie(COOKIES_ACCEPTED, value, 365);
};

const getCookiesAcceptedCookie = (): string | null => {
  return getCookie(COOKIES_ACCEPTED);
};

const setCookie = (name: string, value: string, days?: number) => {
  let expires = '';

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (name: string): string | null => {
  const nameLenPlus = name.length + 1;

  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
};

export { setCookie, getCookie, setCookiesAcceptedCookie, getCookiesAcceptedCookie };
